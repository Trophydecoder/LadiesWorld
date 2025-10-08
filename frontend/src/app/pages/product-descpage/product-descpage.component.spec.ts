import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescpageComponent } from './product-descpage.component';

describe('ProductDescpageComponent', () => {
  let component: ProductDescpageComponent;
  let fixture: ComponentFixture<ProductDescpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDescpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
