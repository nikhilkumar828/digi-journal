import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiDashboardComponent } from './shared-ui-dashboard.component';

describe('SharedUiDashboardComponent', () => {
  let component: SharedUiDashboardComponent;
  let fixture: ComponentFixture<SharedUiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
