import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupCloneComponent } from './popup-clone.component';

describe('PopupCloneComponent', () => {
  let component: PopupCloneComponent;
  let fixture: ComponentFixture<PopupCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupCloneComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
