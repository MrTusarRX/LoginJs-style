<?php
// login.php

session_start(); // Start the session

$valid_username = "Tusar";
$valid_password = "Wish";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate credentials
    if ($username === $valid_username && $password === $valid_password) {
        // Store session data
        $_SESSION['username'] = $username;
        $_SESSION['logged_in'] = true;

        // Send success status and set a delay for redirection
        echo json_encode(['status' => 'success', 'redirect' => true]);
    } else {
        // Invalid credentials
        echo json_encode(['status' => 'error']);
    }
} else {
    // Missing username or password
    echo json_encode(['status' => 'error']);
}
?>
