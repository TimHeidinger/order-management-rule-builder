import { Component, OnInit } from '@angular/core';

interface Rule {
  position: number;
  name: string;
  dat: number;
}
const RULES: Rule[]=[
  {
    position: 1,
    name: 'bps1',
    dat: 1500
  },{
    position: 2,
    name: 'bps2',
    dat: 1600
  },
  {
    position: 3,
    name: 'bps3',
    dat: 999
  }
];

@Component({
  selector: 'app-inner-overview',
  templateUrl: './inner-overview.component.html',
  styleUrls: ['./inner-overview.component.css']
})

export class InnerOverviewComponent implements OnInit {
 rules=RULES;
  constructor() {}

  ngOnInit(): void {
  }

}
