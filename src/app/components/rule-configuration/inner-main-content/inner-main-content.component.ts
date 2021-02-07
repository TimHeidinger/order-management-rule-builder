import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-main-content',
  templateUrl: './inner-main-content.component.html',
  styleUrls: ['./inner-main-content.component.css']
})
export class InnerMainContentComponent implements OnInit {
  public text1: string = "CONDITION";
  public text2: string = "CONSEQUENCE";

  constructor() { }

  ngOnInit(): void {
  }

}
