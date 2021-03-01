import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerMainContentComponent } from './inner-main-content.component';

describe('InnerMainContentComponent', () => {
  let component: InnerMainContentComponent;
  let fixture: ComponentFixture<InnerMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerMainContentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
