import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRowComponentComponent } from './if-row.component';

describe('IfRowComponentComponent', () => {
  let component: IfRowComponentComponent;
  let fixture: ComponentFixture<IfRowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfRowComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
