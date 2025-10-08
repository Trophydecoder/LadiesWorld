import { Component } from '@angular/core';
import { products } from '../../fakedatabase/products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopproducts',
  imports: [FormsModule ,CommonModule],
  templateUrl: './shopproducts.component.html',
  styleUrl: './shopproducts.component.scss'
})
export class ShopproductsComponent {
  constructor(private router: Router) {}
product = products;
search = ''

get filteredProducts() {
  if (!this.search) {
    return this.product;
  }
  const searchLower = this.search.toLowerCase();
  return this.product.filter(p =>
    p.productname.toLowerCase().includes(searchLower)
  );
}

Description(){
  this.router.navigate(['prod-desc']);
}
}
