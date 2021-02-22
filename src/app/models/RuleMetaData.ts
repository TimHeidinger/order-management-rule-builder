import { Injectable } from '@angular/core';

/**
 * AOE automation rule, containing relevant
 * meta data for the corresponding rule
 */
@Injectable()
export class RuleMetaData {

    // Rule meta data
    rule_id: number;
    rule_name: String;
    rule_initial_creation: number;
    rule_last_udpated: number;
    rule_deleted: boolean;

    // Rule data for calcuations as JSON string
    rule_data: String;

    // Frontend variables needed to display certain rule information 
    rule_initial_creation_human_date : String;

}

