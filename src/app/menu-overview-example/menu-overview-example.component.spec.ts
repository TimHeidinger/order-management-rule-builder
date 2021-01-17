import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOverviewExampleComponent } from './menu-overview-example.component';

describe('MenuOverviewExampleComponent', () => {
  let component: MenuOverviewExampleComponent;
  let fixture: ComponentFixture<MenuOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOverviewExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
