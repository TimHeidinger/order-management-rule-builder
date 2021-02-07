import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-main-content',
  templateUrl: './inner-main-content.component.html',
  styleUrls: ['./inner-main-content.component.css']
})
export class InnerMainContentComponent implements OnInit {
  public text1: string = "test1";
  public text2: string = "test2";

  constructor() { }

  ngOnInit(): void {
  }

}
