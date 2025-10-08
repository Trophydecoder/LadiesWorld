import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { products } from '../../fakedatabase/products';
@Component({
  selector: 'app-productdescription',
  imports: [FormsModule ,CommonModule ],
  templateUrl: './productdescription.component.html',
  styleUrl: './productdescription.component.scss'
})
export class ProductdescriptionComponent {
product = products; 

Addtocart(){
  
}
}
