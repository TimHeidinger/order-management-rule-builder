import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-popup-save',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">SaveCheck</h4>
    <button type="button" class="close" aria-label="" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  
  <div class="modal-footer">
 <p> Please fill in all fields</p>
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">ok</button>
    
  </div>
`,
   styleUrls: ['./popup-save.component.css']
})

export class PopupContentS {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}



@Component({
  selector: 'app-popup-save20',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">SaveCheck</h4>
    <button type="button" class="close" aria-label="" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  
  <div class="modal-footer">
  <a routerLink="/"><button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Succesfully saved!</button></a>  
 
    
  </div>
`,
   styleUrls: ['./popup-save.component.css']
})

export class PopupContentS2 {
  @Input() name;
 
  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-popup-save2',
  templateUrl: './popup-save.component.html'
})
export class PopupComponentS {
  @Input() boolean;
  constructor(private modalService: NgbModal) {}

  open() {
    
    if(this.boolean){const modalRef = this.modalService.open(PopupContentS2); modalRef.componentInstance.name = '?';}
    else {const modalRef = this.modalService.open(PopupContentS); modalRef.componentInstance.name = '?';};
    
    
  }
}
