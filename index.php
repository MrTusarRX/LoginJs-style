<?php
// index.php

session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    // If not logged in, redirect to login page
    header("Location: index.html");
    exit;
}

// Your content for the logged-in user
echo "Welcome, " . $_SESSION['username'] . "! You are logged in.";
?>
