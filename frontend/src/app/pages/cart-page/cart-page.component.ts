import { Component } from '@angular/core';
import { CartbacktoshoppingComponent } from "../../componets/cartbacktoshopping/cartbacktoshopping.component";
import { CartItemsComponent } from "../../componets/cart-items/cart-items.component";
import { NavComponent } from "../../componets/global/nav/nav.component";

@Component({
  selector: 'app-cart-page',
  imports: [CartItemsComponent, NavComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
