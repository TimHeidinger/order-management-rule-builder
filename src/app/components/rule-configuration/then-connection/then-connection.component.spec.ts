import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenConnectionComponentComponent } from './then-connection.component';

describe('ThenConnectionComponentComponent', () => {
  let component: ThenConnectionComponentComponent;
  let fixture: ComponentFixture<ThenConnectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThenConnectionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThenConnectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
