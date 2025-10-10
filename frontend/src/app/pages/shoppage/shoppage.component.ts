import { Component } from '@angular/core';
import { ShopproductsComponent } from "../../componets/shopproducts/shopproducts.component";
import { NavComponent } from "../../componets/global/nav/nav.component";

@Component({
  selector: 'app-shoppage',
  imports: [ShopproductsComponent],
  templateUrl: './shoppage.component.html',
  styleUrl: './shoppage.component.scss'
})
export class ShoppageComponent {

}
