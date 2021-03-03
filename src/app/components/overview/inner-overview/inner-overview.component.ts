import { RuleMetaData } from './../../../models/RuleMetaData';
import { Component, Directive, OnInit } from '@angular/core';
import { DatabaseBridge } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {
}

@Component({
  selector: 'app-inner-overview',
  templateUrl: './inner-overview.component.html',
  styleUrls: ['./inner-overview.component.css']
})
export class InnerOverviewComponent implements OnInit {

  rules: RuleMetaData[];

  constructor(private databaseService: DatabaseBridge, private _router: Router) { }

  ngOnInit(): void {

    // Fetch all available rules from database
    this.databaseService.getRules().subscribe(rules => {

      // Add and filter modified rules
      this.rules = rules.filter(x => !x.rule_deleted);
      this.rules.filter(x => !x.rule_deleted).forEach(x => {
        let date: Date = new Date(x.rule_initial_creation);
        let dateHumanString: String = date.toDateString() + " at " + date.toLocaleTimeString();
        x.rule_initial_creation_human_date = dateHumanString;
      });

    });
  }

  /**
   * Refresh overview page and table rule entries
   */
  refresh() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/']);
  }

}
