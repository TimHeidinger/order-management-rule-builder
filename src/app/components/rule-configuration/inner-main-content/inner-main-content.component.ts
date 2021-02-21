import { RuleMetaData } from './../../../models/RuleMetaData';
import { Component, OnInit } from '@angular/core';
import { Rule } from "../../../_interface/rule";
import { EventPing } from "../../../_interface/eventping";
import { DatabaseBridge } from 'src/app/services/database.service';
import { ShipmentRuleData } from 'src/app/models/ShipmentRuleData';

@Component({
  selector: 'app-inner-main-content',
  templateUrl: './inner-main-content.component.html',
  styleUrls: ['./inner-main-content.component.css']
})
export class InnerMainContentComponent implements OnInit {

  constructor(private databaseService: DatabaseBridge) { }

  ngOnInit(): void {
    //console.log(this.jsonExp);
  }

  //TODO: Please change nameing :(
  public text1: string = "CONDITION";
  public text2: string = "CONSEQUENCE";
  public text3: number = 1;
  public text4: number = 2;
  public text5: number = 1;
  public text6: number = 2;


  public ruleName: String = 'testname';
  public ifChoiceDelivery: String = 'home';
  public ifChoiceCarrier: String = 'express';
  public thenChoiceDue: Number = 5;
  public thenChoiceDueTime: Number = 1500;
  public thenChoiceUrgent: Number = 2;
  public thenChoiceUrgentTime: Number = 2000;

  public update(event: EventPing): void {
    //console.log(event);

    if (event.label == "1") {
      this.ifChoiceDelivery = event.object;
    }

    if (event.label == "2") {
      this.ifChoiceCarrier = event.object;
    }

  }

  exportlog() {

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
    exampleShipmentRuleData.ifChoiceCarrier = this.ifChoiceCarrier;
    exampleShipmentRuleData.ifChoiceDelivery = this.ifChoiceDelivery;
    exampleShipmentRuleData.thenChoiceDueTime = this.thenChoiceDueTime;
    exampleShipmentRuleData.thenChoiceUrgend = this.thenChoiceUrgent;
    exampleShipmentRuleData.thenCoiceUrgendTime = this.thenChoiceUrgentTime;

    let exampleRuleMetaData: RuleMetaData = new RuleMetaData();
    exampleRuleMetaData.rule_name = this.ruleName;
    let currentTimeMillis = +Date.now();
    exampleRuleMetaData.rule_initial_creation = currentTimeMillis;
    exampleRuleMetaData.rule_last_udpated = currentTimeMillis;
    exampleRuleMetaData.rule_deleted = false;
    exampleRuleMetaData.rule_data = exampleShipmentRuleData.getJSON();
    this.databaseService.insert(exampleRuleMetaData).subscribe(rules => {
    });

    /*console.log(this.ruleName);
    console.log(this.ifChoiceDelivery);
    console.log(this.ifChoiceCarrier);
    console.log(this.thenChoiceDue);
    console.log(this.thenChoiceDueTime);
    console.log(this.thenChoiceUrgent);
    console.log(this.thenChoiceUrgentTime);

    var rule: any = {};

    rule.ruleName = this.ruleName;
    rule.ifChoicheDelivery = this.ifChoiceDelivery;
    rule.ifChoicheCarrier = this.ifChoiceCarrier;
    rule.thenChoiceDue = this.thenChoiceDue;
    rule.thenChoiceDueTime = this.thenChoiceDueTime;
    rule.thenChoiceUrgent = this.thenChoiceUrgent;
    rule.thenChoiceUrgenTime = this.thenChoiceUrgentTime;
    var jsonString = JSON.stringify(rule);
    console.log(jsonString);
    */

  }
  /*
    jsonExp() {
      var rule: any = {};
      rule.a = this.ruleName;
      rule.b = this.ifChoiceDelivery;
      rule.c = this.ifChoiceCarrier;
      rule.d = this.thenChoiceDue;
      rule.e = this.thenChoiceDueTime;
      rule.f = this.thenChoiceUrgent;
      rule.g = this.thenChoiceUrgentTime;
      var jsonString = JSON.stringify(rule);
  
    }
    */

}
