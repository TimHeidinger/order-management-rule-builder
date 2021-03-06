import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EventPing } from 'src/app/models/EventPing';

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

  change3(s: string) {
    const eventObject: EventPing = {
      label: "3",
      object: s

    };
    this.ping.emit(eventObject);
  }

  change4(s: string) {
    const eventObject: EventPing = {
      label: "4",
      object: s
    };
    this.ping.emit(eventObject);
  }

  change5(s: string) {
    const eventObject: EventPing = {
      label: "5",
      object: s
    };
    this.ping.emit(eventObject);
  }

  ngOnInit(): void {
    this.construction = 'Shipment Request';

    this.relation = "Relation";
    this.choice = "Choice";

    if (this.text == 1) {
      this.attribute = "Delivery Method";
    }
    else {
      this.attribute = "Carrier Method";
    }

  }

  reset(i: number) {
    this.construction = 'Shipment Request';

    this.relation = "Relation";
    this.choice = "Choice";

    if (this.text == 1) {
      this.attribute = "Delivery Method";
    }
    else {
      this.attribute = "Carrier Method";
    }

    if (i == 1) {

      this.change3('');
      this.change1('');
    }

    if (i == 2) {
      this.change4('');
      this.change2('');
    }

  }

}
