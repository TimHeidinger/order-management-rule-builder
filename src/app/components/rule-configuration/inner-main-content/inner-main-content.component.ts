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

  exportlog() {

    if (this.check()) {

      // Get RuleName
      this.ruleName = this.datamessage;

      // Fetch all available rules from database
      this.databaseService.getRules().subscribe(rules => {
        rules.forEach(x => {
          console.log(x);
        });
      });

      // Get specific rule from databaseb by ID
      let exampleID: number = 1;
      this.databaseService.getRule(exampleID).subscribe(rules => {
        rules.forEach(x => {
          console.log(x);
        });
      })

      // Insert rule into database
      let exampleShipmentRuleData: ShipmentRuleData = new ShipmentRuleData();
      exampleShipmentRuleData.ifChoice1 = this.ifChoice1;
      exampleShipmentRuleData.ifChoice2 = this.ifChoice2;
      exampleShipmentRuleData.ifRelation1 = this.ifRelation1;
      exampleShipmentRuleData.ifRelation2 = this.ifRelation2;
      exampleShipmentRuleData.ifConection = this.ifConection;
      exampleShipmentRuleData.thenChoiceDue = this.thenChoiceDue;
      exampleShipmentRuleData.thenChoiceDueTime = this.thenChoiceDueTime;
      exampleShipmentRuleData.thenChoiceUrgend = this.thenChoiceUrgent;
      exampleShipmentRuleData.thenCoiceUrgendTime = this.thenChoiceUrgentTime;

      let exampleRuleMetaData: RuleMetaData = new RuleMetaData();
      exampleRuleMetaData.rule_name = this.ruleName;
      let currentTimeMillis = +Date.now();
      exampleRuleMetaData.rule_initial_creation = currentTimeMillis;
      exampleRuleMetaData.rule_last_updated = currentTimeMillis;
      exampleRuleMetaData.rule_deleted = false;
      exampleRuleMetaData.rule_data = exampleShipmentRuleData.getJSON();
      this.databaseService.insert(exampleRuleMetaData).subscribe(rules => {
      });

    }
  }

}
