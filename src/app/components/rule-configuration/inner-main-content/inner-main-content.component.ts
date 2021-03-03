import { RuleMetaData } from './../../../models/RuleMetaData';
import { Component, OnInit } from '@angular/core';
import { EventPing } from "../../../models/EventPing";
import { DatabaseBridge } from 'src/app/services/database.service';
import { ShipmentRuleData } from 'src/app/models/ShipmentRuleData';

@Component({
  selector: 'app-inner-main-content',
  templateUrl: './inner-main-content.component.html',
  styleUrls: ['./inner-main-content.component.css']
})
export class InnerMainContentComponent implements OnInit {

  constructor(private databaseService: DatabaseBridge) { }

  ngOnInit(): void { }

  public text1: string = "CONDITION";
  public text2: string = "CONSEQUENCE";
  public text3: number = 1;
  public text4: number = 2;
  public text5: number = 1;
  public text6: number = 2;

  public datamessage: string;

  public ruleName: String = '';
  public ifChoice1: String = '';
  public ifChoice2: String = '';
  public ifRelation1: String = '';
  public ifRelation2: String = '';
  public ifConection: String = '';
  public thenChoiceDue: string = "";
  public thenChoiceDueTime: string = "";
  public thenChoiceUrgent: string = "";
  public thenChoiceUrgentTime: string = "";

  /**
   * Fetch user input from different input components
   * @param event click event
   */
  public update(event: EventPing): void {

    if (event.label == "1") {
      this.ifChoice1 = event.object;
    }

    if (event.label == "2") {
      this.ifChoice2 = event.object;
    }

    if (event.label == "3") {
      this.ifRelation1 = event.object;
    }

    if (event.label == "4") {
      this.ifRelation2 = event.object;
    }

    if (event.label == "5") {
      this.ifConection = event.object;
    }

    if (event.label == "21") {
      this.thenChoiceDue = event.object;
    }

    if (event.label == "22") {
      this.thenChoiceDueTime = event.object;
    }

    if (event.label == "23") {
      this.thenChoiceUrgent = event.object;
    }

    if (event.label == "24") {
      this.thenChoiceUrgentTime = event.object;
    }

  }

  /**
   * @returns true, if all fields are set, else false
   */
  check(): boolean {
    this.ruleName = this.datamessage;

    if (this.ruleName == "" || this.ifChoice1 == "" || this.ifChoice2 == ""
      || this.ifRelation1 == "" || this.ifRelation2 == "" || this.thenChoiceDue == "" ||
      this.thenChoiceDueTime == "" || this.thenChoiceUrgent == "" || this.thenChoiceUrgentTime == "") {
      return false;
    } else {
      return true;
    };

  }

  /**
   * Insert newly created rule to database
   */
  exportlog() {

    if (this.check()) {

      // Get RuleName
      this.ruleName = this.datamessage;
      
      // Insert rule into database
      let shipmentRuleData: ShipmentRuleData = new ShipmentRuleData();
      shipmentRuleData.ifChoice1 = this.ifChoice1;
      shipmentRuleData.ifChoice2 = this.ifChoice2;
      shipmentRuleData.ifRelation1 = this.ifRelation1;
      shipmentRuleData.ifRelation2 = this.ifRelation2;
      shipmentRuleData.ifConection = this.ifConection;
      shipmentRuleData.thenChoiceDue = this.thenChoiceDue;
      shipmentRuleData.thenChoiceDueTime = this.thenChoiceDueTime;
      shipmentRuleData.thenChoiceUrgend = this.thenChoiceUrgent;
      shipmentRuleData.thenCoiceUrgendTime = this.thenChoiceUrgentTime;

      let ruleMetaData: RuleMetaData = new RuleMetaData();
      ruleMetaData.rule_name = this.ruleName;
      let currentTimeMillis = +Date.now();
      ruleMetaData.rule_initial_creation = currentTimeMillis;
      ruleMetaData.rule_last_updated = currentTimeMillis;
      ruleMetaData.rule_deleted = false;
      ruleMetaData.rule_data = shipmentRuleData.getJSON();
      this.databaseService.insert(ruleMetaData).subscribe(rules => {
      });

    }
  }

}
