import { Component,Directive,EventEmitter, Input, Output,QueryList,ViewChildren, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { PopupComponent, PopupContent } from '../popup/popup.component';
import { Popup2Component } from '../popup2/popup2.component';

interface Rule {
  position: number;
  name: string;
  dat: number;
}
const RULES: Rule[]=[
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 1,
    name: 'a',
    dat: 15
  },{
    position: 2,
    name: 'xbps',
    dat: 16
  },
  {
    position: 3,
    name: 'bps3',
    dat: 99
  }
];
export type SortColumn = keyof Rule | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
@Component({
  selector: 'app-inner-overview',
  templateUrl: './inner-overview.component.html',
  styleUrls: ['./inner-overview.component.css']
})


export class InnerOverviewComponent implements OnInit {
 rules=RULES;
 @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
 onSort({column, direction}: SortEvent) {

  // resetting other headers
  this.headers.forEach(header => {
    if (header.sortable !== column) {
      header.direction = '';
    }
  });

  // sorting rules
  if (direction === '' || column === '') {
    this.rules = RULES;
  } else {
    this.rules = [...RULES].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}
open() {
  open();
  
}


constructor() {}

ngOnInit(): void {
}
}
