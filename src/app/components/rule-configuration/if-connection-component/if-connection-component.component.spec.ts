import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfConnectionComponentComponent } from './if-connection-component.component';

describe('IfConnectionComponentComponent', () => {
  let component: IfConnectionComponentComponent;
  let fixture: ComponentFixture<IfConnectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfConnectionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfConnectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
