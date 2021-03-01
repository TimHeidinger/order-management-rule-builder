import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponentS, PopupContentS } from './popup-save.component';

describe('PopupSaveComponent', () => {
  let component: PopupComponentS;
  let fixture: ComponentFixture<PopupComponentS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupComponentS]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponentS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
