import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerOverviewComponent } from './inner-overview.component';

describe('InnerOverviewComponent', () => {
  let component: InnerOverviewComponent;
  let fixture: ComponentFixture<InnerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
