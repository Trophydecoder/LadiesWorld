import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingbookingsComponent } from './landingbookings.component';

describe('LandingbookingsComponent', () => {
  let component: LandingbookingsComponent;
  let fixture: ComponentFixture<LandingbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingbookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
