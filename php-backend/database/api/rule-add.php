<?php

/*
* Insert new data to database
*/
require_once '../includes/connection.inc.php';

$rule_name = $_GET['rule_name'];
$rule_initial_creation = $_GET['rule_initial_creation'];
$rule_last_updated = $_GET['rule_last_updated'];
$rule_deleted = $_GET['rule_deleted'];
$rule_data = $_GET['rule_data'];

$query = "INSERT INTO aoe_rules 
    (rule_name, rule_initial_creation, rule_last_updated, rule_deleted, rule_data) 
    VALUES (?, ?, ?, ?, ?);";

$conn = getDatabaseConnection();
$stmt = $conn->prepare($query);
$stmt->bindParam(1, $rule_name);
$stmt->bindParam(2, $rule_initial_creation);
$stmt->bindParam(3, $rule_last_updated);
$stmt->bindParam(4, $rule_deleted);
$stmt->bindParam(5, $rule_data);
$stmt->execute();

echo ("inserted to database");
