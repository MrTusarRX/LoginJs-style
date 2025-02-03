<?php
// login.php

session_start(); 

$valid_username = "Tusar";
$valid_password = "Wish";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['username'] = $username;
        $_SESSION['logged_in'] = true;

       
        echo json_encode(['status' => 'success', 'redirect' => true]);
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo json_encode(['status' => 'error']);
}
?>
