import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponentComponent implements OnInit {

  // @Input() notification;
  @Input()
  public text: string;


  constructor() { }

  ngOnInit(): void {
  }

}
