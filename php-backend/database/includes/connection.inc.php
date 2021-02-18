<?php

function getDatabaseConnection()
{
    require_once '../includes/config.inc.php';
    $dsn = "pgsql:host=$host;port=$port;dbname=$database;user=$username;password=$password";

    $conn = new PDO($dsn);
    return $conn;
}
