import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./componets/global/nav/nav.component";
import { FooterComponent } from "./componets/footer/footer.component";
import { CartItemsComponent } from "./componets/cart-items/cart-items.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidecartComponent } from "./componets/global/sidecart/sidecart.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavComponent,  SidecartComponent, FormsModule, CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  showCart = false;

  toggleCart() {
    this.showCart = !this.showCart;
    console.log("Cart toggled:", this.showCart);
  }

  closeCart() {
    this.showCart = false;
    console.log("Cart closed!");
  }
}
