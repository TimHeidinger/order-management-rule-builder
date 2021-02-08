import { getLocaleDateFormat, getLocaleTimeFormat, Time } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgxMaterialTimepickerComponent, NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
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

  

  }
  
  
  reset(){
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
    
  }

}
