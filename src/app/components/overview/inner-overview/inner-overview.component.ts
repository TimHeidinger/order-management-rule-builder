import { RuleMetaData } from './../../../models/RuleMetaData';
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, OnInit } from '@angular/core';
import { DatabaseBridge } from 'src/app/services/database.service';

export type SortColumn = keyof RuleMetaData | '';
export type SortDirection = 'asc' | 'desc' | '';

const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
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
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: 'app-inner-overview',
  templateUrl: './inner-overview.component.html',
  styleUrls: ['./inner-overview.component.css']
})

export class InnerOverviewComponent implements OnInit {
  
  rules: RuleMetaData[];


  print(t: any){
    console.log(t);
  }

  constructor(private databaseService: DatabaseBridge) { }

  ngOnInit(): void {
    // Fetch all available rules from database
    this.databaseService.getRules().subscribe(rules => {

      // Add and filter modified rules
      this.rules = rules.filter(x => !x.rule_deleted);
      this.rules.filter(x => !x.rule_deleted).forEach(x => {
        let date : Date = new Date(x.rule_initial_creation);
        let dateHumanString : String = date.getDay() + "." + date.getMonth() + "." + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes();
        x.rule_initial_creation_human_date = dateHumanString;
      });

    });

  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  onSort({ column, direction }: SortEvent) {

    console.log("sdasd");

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting rules
    if (direction === '' || column === '') {
      this.rules = this.rules;
    } else {
      this.rules = [...this.rules].sort((a, b) => {
        const res = compare(a.rule_name[column], b.rule_name[column]);
        return direction === 'asc' ? res : -res;
      });
    }

  }

}
