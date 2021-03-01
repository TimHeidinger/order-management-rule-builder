import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenRowComponentComponent } from './then-row.component';

describe('ThenRowComponentComponent', () => {
  let component: ThenRowComponentComponent;
  let fixture: ComponentFixture<ThenRowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThenRowComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThenRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
