import { Injectable } from '@angular/core';

/**
 * AOE shipment rule data for calculations 
 */
@Injectable()
export class ShipmentRuleData {

    ifChoice1: String;
    ifChoice2: String;
    ifRelation1: String;
    ifRelation2: String;
    ifConection: String;
    thenChoiceDue: any;
    thenChoiceDueTime: any;
    thenChoiceUrgend: any;
    thenCoiceUrgendTime: any;

    /**
     * @returns JSON string of this instance
     */
    public getJSON(): String {
        return JSON.stringify(this);
    }

}