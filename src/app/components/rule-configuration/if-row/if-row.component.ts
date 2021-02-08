import { getLocaleDateFormat, getLocaleTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-row',
  templateUrl: './if-row.component.html',
  styleUrls: ['./if-row.component.css']
})
export class IfRowComponentComponent implements OnInit {

  constructor() { }




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



  ngOnInit(): void {
    this.construction = 'Shipment Request';
    this.objekt = "Attributes";
    this.date = "Relation";
    this.opt = "Choice";
    
    
  }

  reset(){
    this.construction = 'Shipment Request';
    this.objekt = "Attributes";
    this.date = "Relation";
    this.opt = "Choice";
  
    
  }

}
