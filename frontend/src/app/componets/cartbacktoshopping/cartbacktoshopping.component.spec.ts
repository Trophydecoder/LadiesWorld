import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbacktoshoppingComponent } from './cartbacktoshopping.component';

describe('CartbacktoshoppingComponent', () => {
  let component: CartbacktoshoppingComponent;
  let fixture: ComponentFixture<CartbacktoshoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartbacktoshoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbacktoshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
