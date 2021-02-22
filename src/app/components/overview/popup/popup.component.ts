import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
      <p>Do you really want to <strong><span class="text-danger">delete</span></strong> {{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="button" class="btn btn-danger" (click)="activeModal.close('Close click')">Delete</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
  `
})
export class PopupContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-popup2',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(PopupContent);
    modalRef.componentInstance.name = '?';
  }
}