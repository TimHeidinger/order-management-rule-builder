import { DatabaseBridge } from 'src/app/services/database.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Warning</h4>
      <button type="button" class="close" aria-label="Löschen" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Do you really want to <strong><span class="text-danger">delete</span></strong> ID {{existingRuleID}}?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="button" class="btn btn-danger" (click)="activeModal.close('Close click'); updateRule(); this.refresh();">Delete</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
  `
})
export class PopupDeleteContent {

  @Input() existingRuleID;

  constructor(public activeModal: NgbActiveModal, private databaseService: DatabaseBridge, private _router: Router) { }

  refresh() {

    setTimeout(() => {
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['/']);
    }, 2000);

  }

  updateRule() {
    console.log(this.existingRuleID);

    // Fetch existing rule from database
    this.databaseService.getRule(this.existingRuleID).subscribe(rules => {

      rules.forEach(x => {

        // Edit rule, set it to deleted
        let currentTimeMillis = +Date.now();
        x.rule_last_updated = currentTimeMillis;
        x.rule_deleted = true;
        x.rule_data = JSON.stringify(x.rule_data);

        // Update existing rule in database
        this.databaseService.update(x).subscribe(t => {
        });

      });
    });

  }

}

@Component({
  selector: 'app-popup2',
  templateUrl: './popup-delete.component.html'
})
export class PopupDeleteComponent {
  @Input() name2;

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(PopupDeleteContent);
    modalRef.componentInstance.existingRuleID = this.name2;
  }
}