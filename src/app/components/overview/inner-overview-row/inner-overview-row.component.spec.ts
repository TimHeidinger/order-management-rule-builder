import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerOverviewRowComponent } from './inner-overview-row.component';

describe('InnerOverviewRowComponent', () => {
  let component: InnerOverviewRowComponent;
  let fixture: ComponentFixture<InnerOverviewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerOverviewRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerOverviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
