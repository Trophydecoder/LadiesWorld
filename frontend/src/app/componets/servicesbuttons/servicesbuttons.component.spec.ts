import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesbuttonsComponent } from './servicesbuttons.component';

describe('ServicesbuttonsComponent', () => {
  let component: ServicesbuttonsComponent;
  let fixture: ComponentFixture<ServicesbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesbuttonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
