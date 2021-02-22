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

      <input [(ngModel)]="datamessage" class="form-control" id="ex2" type="text" placeholder="Enter a new rule name:">
    
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click'); go()">Continue</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
  `
})
export class Popup2Content {
  @Input() name;


  ruleName: string;
  datamessage: string;

  constructor(public activeModal: NgbActiveModal) {}


  go(){
   // console.log("d");
    console.log(this.name);
    this.ruleName=this.datamessage;
    console.log(this.ruleName);
  }




}

@Component({
  selector: 'app-popup21',
  templateUrl: './popup2.component.html'
})
export class Popup2Component {
  @Input() name2;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(Popup2Content);
    modalRef.componentInstance.name = this.name2;
  }
}
