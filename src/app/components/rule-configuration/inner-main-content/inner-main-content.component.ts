import { Component, OnInit } from '@angular/core';
import { Rule } from "../../../_interface/rule";
import { EventPing } from "../../../_interface/eventping";

@Component({
  selector: 'app-inner-main-content',
  templateUrl: './inner-main-content.component.html',
  styleUrls: ['./inner-main-content.component.css']
})
export class InnerMainContentComponent implements OnInit {
  public text1: string = "CONDITION";
  public text2: string = "CONSEQUENCE";

  public text3: number = 1;
  public text4: number = 2;

  public text5: number = 1;
  public text6: number = 2;


  public datamessage: string;


 public ruleName: String ='testname';
 public ifChoiceDelivery: String ='home';
 public ifChoiceCarrier: String ='express';
 public ifRelation1: String ='equal';
 public ifRelation2: String ='equal';
 public thenChoiceDue: string = "5";
 public thenChoiceDueTime: string = "1500";
 public thenChoiceUrgent: string = "3";
 public thenChoiceUrgentTime: string = "2000";


public update (event: EventPing): void{
  //console.log(event);

  if(event.label=="1"){
  this.ifChoiceDelivery= event.object;
  }

  if(event.label=="2"){
    this.ifChoiceCarrier= event.object;
    }


  if(event.label=="3"){
    this.ifRelation1= event.object;
    }


    if(event.label=="4"){
      this.ifRelation2= event.object;
      }

      if(event.label=="21"){
        this.thenChoiceDue= event.object;
        }



        if(event.label=="6"){
          this.thenChoiceDueTime= event.object;
          }



          if(event.label=="7"){
            this.thenChoiceUrgent= event.object;
            }



            if(event.label=="8"){
              this.thenChoiceUrgentTime= event.object;
              }


}

 exportlog() {

  this.ruleName=this.datamessage;



  console.log(this.ruleName);
  console.log(this.ifChoiceDelivery);
  console.log(this.ifChoiceCarrier);
  console.log(this.ifRelation1);
  console.log(this.ifRelation2);
  console.log(this.thenChoiceDue);
  console.log(this.thenChoiceDueTime);
  console.log(this.thenChoiceUrgent);
  console.log(this.thenChoiceUrgentTime);


  
 //console.log(this.datamessage);

  var rule: any={};
  
  rule.ruleName = this.ruleName;
  rule.ifChoicheDelivery=this.ifChoiceDelivery;
  rule.ifChoicheCarrier=this.ifChoiceCarrier;
  rule.ifRelation1=this.ifRelation1;
  rule.ifRelation2=this.ifRelation2;
  //this.ifRelation
  rule.thenChoiceDue=this.thenChoiceDue;
  rule.thenChoiceDueTime=this.thenChoiceDueTime;
  rule.thenChoiceUrgent=this.thenChoiceUrgent;
  rule.thenChoiceUrgenTime=this.thenChoiceUrgentTime;
  var jsonString = JSON.stringify(rule);
  console.log(jsonString);
}


  constructor() { }

  ngOnInit(): void {

    console.log(this.jsonExp);
  }

  jsonExp(){
var rule: any={};
rule.a = this.ruleName;
rule.b=this.ifChoiceDelivery;
rule.c=this.ifChoiceCarrier;
rule.d=this.thenChoiceDue;
rule.e=this.thenChoiceDueTime;
rule.f=this.thenChoiceUrgent;
rule.g=this.thenChoiceUrgentTime;
var jsonString = JSON.stringify(rule);

  }
}
