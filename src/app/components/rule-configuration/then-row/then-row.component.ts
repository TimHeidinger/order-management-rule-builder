import { getLocaleDateFormat, getLocaleTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-then-row',
  templateUrl: './then-row.component.html',
  styleUrls: ['./then-row.component.css']
})

export class ThenRowComponentComponent implements OnInit {

  public construction: string;
  public constructionNumber: number;
  public objekt: string;
  public objektNumber: number;
  public date: string;
  public dateNumber: number;
  public opt: string;
  public optNumber: number;
  public offset: string;
  public nu: number;

  
  exportlog() {

    console.log(this.constructionNumber);
    console.log(this.objektNumber);
    console.log(this.date);
    console.log(this.opt);
    console.log(this.offset);
    
  }

  constructor() { }

  ngOnInit(): void {
    this.construction = 'Set';
    this.objekt = "Shipment Request";
    this.date = "Urgent Date";
    this.opt = "OrderPlacedTime";
    this.offset = "offset";
    
  }

  reset(){
    this.construction = 'Delete';
    this.objekt = "Shipment Request";
    this.date = "Urgent Date";
    this.opt = "OrderPlacedTime";
    this.offset = "offset";
    
  }
}
