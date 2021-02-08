import { getLocaleDateFormat, getLocaleTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-row',
  templateUrl: './if-row.component.html',
  styleUrls: ['./if-row.component.css']
})
export class IfRowComponentComponent implements OnInit {

  constructor() { }


  @Input()
  public text: number;

  public construction: string;
  public constructionNumber: number;
  public attribute: string;
  public relation: string;
  public choice: string;
  public offset: string;
  public nu: number;

  
  exportlog() {

    console.log(this.constructionNumber);
    console.log(this.relation);
    console.log(this.choice);
    console.log(this.offset);
    
  }



  ngOnInit(): void {
    this.construction = 'Shipment Request';
    this.attribute = "Attributes";
    this.relation = "Relation";
    this.choice = "Choice";
    
    
  }

  reset(){
    this.construction = 'Shipment Request';
    this.attribute = "Attributes";
    this.relation = "Relation";
    this.choice = "Choice";
  
    
  }

}
