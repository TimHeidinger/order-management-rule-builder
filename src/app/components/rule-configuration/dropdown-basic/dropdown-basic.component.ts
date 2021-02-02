import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-basic',
  templateUrl: './dropdown-basic.component.html',
  styleUrls: ['./dropdown-basic.component.css']
  
})
export class DropdownBasicComponent implements OnInit {

  public option: string;
  public optionNumber: number;

  exportlog() {
    
    console.log(this.optionNumber);
  }



  constructor() { }

  ngOnInit(): void {
    this.option='choose';
  }

}






