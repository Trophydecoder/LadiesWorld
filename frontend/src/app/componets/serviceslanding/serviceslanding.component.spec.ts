import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceslandingComponent } from './serviceslanding.component';

describe('ServiceslandingComponent', () => {
  let component: ServiceslandingComponent;
  let fixture: ComponentFixture<ServiceslandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceslandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
