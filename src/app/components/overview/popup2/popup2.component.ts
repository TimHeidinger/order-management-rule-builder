import { DatabaseBridge } from './../../../services/database.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup20',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" >Clone Rule</h4>
      <button type="button" class="close" aria-label="" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">

      <input [(ngModel)]="cloneRuleName" class="form-control" id="ex2" type="text" placeholder="Enter a new rule name:">
    
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click'); addNewlyClonedRule()">Continue</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
  `
})
export class Popup2Content {

  @Input() existingRuleID;
  cloneRuleName: string;

  constructor(public activeModal: NgbActiveModal, private databaseService: DatabaseBridge) { }

  /**
   * Insert newly created rule to database
   */
  addNewlyClonedRule() {

    // Fetch existing rule from database
    this.databaseService.getRule(this.existingRuleID).subscribe(rules => {

      rules.forEach(x => {

        // Create newly cloned rule
        x.rule_name = this.cloneRuleName != null ? this.cloneRuleName : ("Clone of " + x.rule_name + " (" + x.rule_id + ")");
        let currentTimeMillis = +Date.now();
        x.rule_initial_creation = currentTimeMillis;
        x.rule_last_udpated = currentTimeMillis;
        x.rule_data = JSON.stringify(x.rule_data);

        // Insert newly created rule to database
        this.databaseService.insert(x).subscribe(t => {
        });;

      });
    });

  }

}

@Component({
  selector: 'app-popup21',
  templateUrl: './popup2.component.html'
})
export class Popup2Component {
  @Input() name2;
  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(Popup2Content);
    modalRef.componentInstance.existingRuleID = this.name2;
  }
}
