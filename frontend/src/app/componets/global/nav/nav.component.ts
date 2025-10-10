import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Output() cartClicked = new EventEmitter<void>();

  onCartClick() {
    this.cartClicked.emit();
  }

  constructor(private router: Router) {}
  sidebarWidth = 0;


  openLSide() {
    this.sidebarWidth = 60; // adjust the width as needed
  }

  closeLSide() {
    this.sidebarWidth = 0;
  }
  
  Home(){
    this.router.navigate(['']);
  }

  services(){
    this.router.navigate(['services-page']);
  }

  bookings(){
    this.router.navigate(['bookings-page']);
  }
  shop(){
    this.router.navigate(['shop-page']);
  }
  contact(){
    this.router.navigate(['contact-page']);
  }
}

