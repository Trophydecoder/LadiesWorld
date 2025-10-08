import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  constructor(private router: Router) {}


  Courses(){

  }
  Bookings(){
    this.router.navigate(['bookings-page']);
  }
  shop(){
    this.router.navigate(['shop-page']);
  }
}
