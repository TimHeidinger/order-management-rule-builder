import { getLocaleDateFormat, getLocaleTimeFormat, Time } from '@angular/common';
import { Component, EventEmitter, Input, Output, NgModule, OnInit } from '@angular/core';
//import * as EventEmitter from 'events';
import { NgxMaterialTimepickerComponent, NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { EventPing } from 'src/app/_interface/eventping';
import { isTemplateExpression } from 'typescript';

@Component({
  
  selector: 'app-then-row',
  templateUrl: './then-row.component.html',
  styleUrls: ['./then-row.component.css']
})

export class ThenRowComponentComponent implements OnInit {
 

  @Input()
  public text: number;


  public construction: string;
  public constructionNumber: number;
  public objekt: string;
  public objektNumber: number;
  public date: string;
  public dateNumber: number;
  public opt: string;
  public optNumber: number;
  public offset: string;
  public ti: Time;

  public datamessage: string;
  public datamessage2: string;

  public intervalId: any;


  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

public picker: NgxMaterialTimepickerComponent;
 darkTheme: NgxMaterialTimepickerTheme = {
  container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
  },
  dial: {
      dialBackgroundColor: '#555',
  },
  clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff'
  }
};

  exportlog() {

    console.log(this.constructionNumber);
    console.log(this.objektNumber);
    console.log(this.date);
    console.log(this.opt);
    console.log(this.offset);
    
    
  }



  

  change21(s: string) {

    var eventObject: EventPing;
    if ( this.text == 1){
      eventObject = {
        label: "21",
        object: s
      };
      
    }

    else{
      eventObject  = {
        label: "23",
        object: s
      };
      
    }
  

    this.ping.emit(eventObject);
    
  }



  change22(s: string) {
    const eventObject: EventPing = {
      label: "22",
      object: s
  
    };

    this.ping.emit(eventObject);
    
  }



  // change23(s: string) {
  //   const eventObject: EventPing = {
  //     label: "23",
  //     object: s
  
  //   };

  //   this.ping.emit(eventObject);
    
  // }




  change24(s: string) {
    const eventObject: EventPing = {
      label: "24",
      object: s
  
    };

    this.ping.emit(eventObject);
    
  }





  constructor() { }

  ngOnInit(): void {
    this.construction = 'Set';
    this.objekt = "Shipment Request";
   
    this.opt = "OrderPlacedTime";
    this.offset = "offset";
    
    if(this.text==2){
      this.date = "Urgent Date";
    }
    else{
      this.date = "Due Date";
    }

  

    this.intervalId = setInterval( () => { this.interval();}, 1000);


  }

  ngOnDestroy(){
    clearInterval(this.intervalId);
  }

  public interval(){
   // console.log("www");
    
    

    if ( this.text == 1){

      this.change22(this.datamessage);
      //console.log(this.datamessage);
    }

    if ( this.text == 2){

      this.change24(this.datamessage2);
     // console.log(this.datamessage2);
    }

   




   // return null;

  }
  
  
  reset(i: number){
    this.construction = 'Set';
    this.objekt = "Shipment Request";
    
    this.opt = "OrderPlacedTime";
    this.offset = "offset";
  
    if(this.text==2){
      this.date = "Urgent Date";
    }
    else{
      this.date = "Due Date";
    }
    
    if(i==1){
      this.change21('');
      this.datamessage="";
    }

    if(i==2){
      this.change21('');
      this.datamessage2="";
    }
  }

}
