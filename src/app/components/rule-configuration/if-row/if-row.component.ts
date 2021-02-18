import { getLocaleDateFormat, getLocaleTimeFormat } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';

@Component({
  selector: 'app-if-row',
  templateUrl: './if-row.component.html',
  styleUrls: ['./if-row.component.css']
})
export class IfRowComponentComponent implements OnInit {

  constructor() { }


  @Input()
  public text: number;


  @Output() ping: EventEmitter<any> = new EventEmitter<any>();



  public construction: string;
  public constructionNumber: number;
  public attribute: string;
  public relation: string;
  public choice: string;
  public offset: string;
  public nu: number;


  public teststring: string = "INT";



  change1(s: string) {
    const eventObject: EventPing = {
      label: "1",
      object: s
  
    };


    this.ping.emit(eventObject);
    
  }


  change2(s: string) {
    const eventObject: EventPing = {
      label: "2",
      object: s
  
    };
    this.ping.emit(eventObject);
    
  }

  
  exportlog() {

    console.log(this.constructionNumber);
    console.log(this.relation);
    console.log(this.choice);
    console.log(this.offset);
    
  }



  ngOnInit(): void {
    this.construction = 'Shipment Request';
    
    this.relation = "Relation";
    this.choice = "Choice";
    
    if(this.text==1){
      this.attribute = "Delivery Method";
    }
    else{
      this.attribute = "Carrier Method";
    }
    
  }

  reset(){
    this.construction = 'Shipment Request';
  
    this.relation = "Relation";
    this.choice = "Choice";

    if(this.text==1){
      this.attribute = "Delivery Method";
    }
    else{
      this.attribute = "Carrier Method";
    }
    
  }

}
