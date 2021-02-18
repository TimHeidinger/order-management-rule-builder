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


 public ruleName: String ='testname';
 public ifChoiceDelivery: String ='home';
 public ifChoiceCarrier: String ='express';
 public thenChoiceDue: Number = 5;
 public thenChoiceDueTime: Number = 1500;
 public thenChoiceUrgent: Number = 2;
 public thenChoiceUrgentTime: Number = 2000;


public update (event: EventPing): void{
  //console.log(event);

  if(event.label=="1"){
  this.ifChoiceDelivery= event.object;
  }

  if(event.label=="2"){
    this.ifChoiceCarrier= event.object;
    }



}

 exportlog() {

  console.log(this.ruleName);
  console.log(this.ifChoiceDelivery);
  console.log(this.ifChoiceCarrier);
  console.log(this.thenChoiceDue);
  console.log(this.thenChoiceDueTime);
  console.log(this.thenChoiceUrgent);
  console.log(this.thenChoiceUrgentTime);

}


  constructor() { }

  ngOnInit(): void {
  }

}
