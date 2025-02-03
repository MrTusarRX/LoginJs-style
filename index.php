<?php


session_start(); 

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: index.html");
    exit;
}
echo "Welcome, " . $_SESSION['username'] . "! You are logged in.";
?>
