import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBasicComponent } from './navbar-basic.component';

describe('NavbarBasicComponent', () => {
  let component: NavbarBasicComponent;
  let fixture: ComponentFixture<NavbarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
