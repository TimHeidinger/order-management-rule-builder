<?php

/**
 * Fetch all rules, or specific rules by ID, from database
 */
require_once '../includes/connection.inc.php';

$id = $_GET['rule_id'];

$conn = getDatabaseConnection();
if ($id != NULL) {
	$query = "SELECT row_to_json (aoe_rules) FROM aoe_rules WHERE rule_id = ?";
	$stmt = $conn->prepare($query);
	$stmt->bindParam(1, $id);
} else {
	$query = "SELECT row_to_json (aoe_rules) FROM aoe_rules";
	$stmt = $conn->prepare($query);
}

$stmt->execute();
$result = $stmt->fetchAll();

$count = count($result);
$output = "[";
for ($i = 0; $i < $count; $i++) {
	$output = $output . $result[$i][0];
	if (($i + 1) != $count) {
		$output = $output . ',';
	}
}
$output = $output . ']';
echo ($output);
