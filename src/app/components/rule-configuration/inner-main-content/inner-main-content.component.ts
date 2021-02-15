import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
