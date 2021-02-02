import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonComponentComponent } from './add-button.component';

describe('AddButtonComponentComponent', () => {
  let component: AddButtonComponentComponent;
  let fixture: ComponentFixture<AddButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddButtonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
