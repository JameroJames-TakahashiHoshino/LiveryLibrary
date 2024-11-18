<?php
// Connect to the database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $bookTitle = $_POST["bookTitle"];
    $borrowerName = $_POST["fullName"];
    $borrowerEmail = $_POST["emailAddress"];
    $borrowerGender = $_POST["gender"];
    $bookAuthor = $_POST["author"];
    $bookGenre = $_POST["genre"];
    $bookBranch = $_POST["branch"];
    $borrowPurpose = $_POST["purpose"];
    $bookISBN = $_POST["isbn"];

    // Check if the book is available
    $stmt = $conn->prepare("SELECT * FROM books WHERE title = ? AND status = 0");
    $stmt->bind_param("s", $bookTitle);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Update the book status to borrowed
        $stmt = $conn->prepare("UPDATE books SET status = 1 WHERE title = ?");
        $stmt->bind_param("s", $bookTitle);
        $stmt->execute();

        // Log the borrowing event
        $stmt = $conn->prepare("INSERT INTO borrow_log (book_id, borrower_name, borrower_email, borrower_gender, book_author, book_genre, book_branch, borrow_purpose, book_isbn, borrow_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())");
        $stmt->bind_param("sssssssss", $bookId, $borrowerName, $borrowerEmail, $borrowerGender, $bookAuthor, $bookGenre, $bookBranch, $borrowPurpose, $bookISBN);
        $stmt->execute();

        // Generate a receipt number
        $receiptNumber = generateReceiptNumber();

        // Display success message
        echo "Book borrowed successfully. Receipt number: " . $receiptNumber;
    } else {
        // Display error message
        echo "Book is not available.";
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}

// Function to generate a receipt number
function generateReceiptNumber() {
    // Generate a unique receipt number
    $receiptNumber = uniqid();

    return $receiptNumber;
}
?>