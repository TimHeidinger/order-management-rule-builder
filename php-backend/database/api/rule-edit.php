<?php

require_once '../includes/connection.inc.php';

$id = $_GET['rule_id'];
$rule_last_updated = $_GET['rule_last_updated'];
$rule_deleted = $_GET['rule_deleted'];
$rule_data = $_GET['rule_data'];

$conn = getDatabaseConnection();
$query = "UPDATE aoe_rules 
            SET rule_last_updated = ?
            AND rule_deleted = ?
            AND rule_data = ?
            WHERE rule_id = ?";
$stmt = $conn->prepare($query);
$stmt->bindParam(1, $id);
$stmt->bindParam(2, $rule_last_updated);
$stmt->bindParam(3, $rule_deleted );
$stmt->bindParam(4, $rule_data);
$stmt->execute();

echo ("existing rule updated in database");
