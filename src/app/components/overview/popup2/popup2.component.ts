import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup20',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Klonen</h4>
      <button type="button" class="close" aria-label="" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Wollen Sie wirklich löschen {{name}}</p> 
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Continue</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
  `
})
export class Popup2Content {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-popup21',
  templateUrl: './popup2.component.html'
})
export class Popup2Component {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(Popup2Content);
    modalRef.componentInstance.name = '?';
  }
}
