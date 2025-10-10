import { Component } from '@angular/core';
import { ProductdescriptionComponent } from "../../componets/productdescription/productdescription.component";
import { NavComponent } from "../../componets/global/nav/nav.component";

@Component({
  selector: 'app-product-descpage',
  imports: [ProductdescriptionComponent],
  templateUrl: './product-descpage.component.html',
  styleUrl: './product-descpage.component.scss'
})
export class ProductDescpageComponent {

}
