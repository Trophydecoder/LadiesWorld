import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

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

