import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InnerNavbarComponentComponent } from './inner-navbar.component';

describe('InnerNavbarComponentComponent', () => {
  let component: InnerNavbarComponentComponent;
  let fixture: ComponentFixture<InnerNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerNavbarComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
