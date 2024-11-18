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
    $bookId = $_POST["bookId"];
    $returnerName = $_POST["returnerName"];
    $returnerEmail = $_POST["returnerEmail"];
    $bookCondition = $_POST["bookCondition"];
    $fines = $_POST["fines"];

    // Check if the book is borrowed
    $stmt = $conn->prepare("SELECT * FROM books WHERE id = ? AND status = 1");
    $stmt->bind_param("i", $bookId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Update the book status to available
        $stmt = $conn->prepare("UPDATE books SET status = 0 WHERE id = ?");
        $stmt->bind_param("i", $bookId);
        $stmt->execute();

        // Log the returning event
        $stmt = $conn->prepare("INSERT INTO return_log (book_id, returner_name, returner_email, book_condition, fines, return_date) VALUES (?, ?, ?, ?, ?, NOW())");
        $stmt->bind_param("isssd", $bookId, $returnerName, $returnerEmail, $bookCondition, $fines);
        $stmt->execute();

        // Display success message
        echo "Book returned successfully.";
    } else {
        // Display error message
        echo "Book is not borrowed.";
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>