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

// Get form data
$fullName = $_POST["fullName"];
$email = $_POST["email"];
$username = $_POST["username"];
$entryDate = $_POST["entryDate"];
$gender = $_POST["gender"];

// Insert data into the database
$sql = "INSERT INTO book_entries (full_name, email, username, entry_date, gender) VALUES ('$fullName', '$email', '$username', '$entryDate', '$gender')";

if ($conn->query($sql) === TRUE) {
    echo "Book entry added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>