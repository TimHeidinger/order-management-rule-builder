import { Injectable } from '@angular/core';

/**
 * AOE shipment rule data for calculations 
 */
@Injectable()
export class ShipmentRuleData {

    ifChoiceDelivery: String;
    ifChoiceCarrier: String;
    thenChoiceDueTime: any; //TODO: Add type
    thenChoiceUrgend: any; //TODO: Add type
    thenCoiceUrgendTime: any; //TODO: Add type

    /**
     * @returns JSON string of this instance
     */
    public getJSON(): String {
        return JSON.stringify(this);
    }

}