import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsboxesComponent } from './bookingsboxes.component';

describe('BookingsboxesComponent', () => {
  let component: BookingsboxesComponent;
  let fixture: ComponentFixture<BookingsboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsboxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
