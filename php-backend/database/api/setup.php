<?php

/**
 * Ininitally create new rules table
 */
require_once '../includes/connection.inc.php';

$conn = getDatabaseConnection();
$conn->query(
    "CREATE TABLE IF NOT EXISTS aoe_rules (
rule_id SERIAL NOT NULL PRIMARY KEY,
rule_name VARCHAR(100),
rule_initial_creation BIGINT,
rule_last_updated BIGINT,
rule_deleted BOOLEAN,
rule_data JSON);"
);

echo ("created new database table aoe_rules");
