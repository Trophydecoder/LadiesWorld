import { Component } from '@angular/core';
import { BookingsboxesComponent } from "../../componets/bookingsboxes/bookingsboxes.component";
import { NavComponent } from "../../componets/global/nav/nav.component";
import { LandingbookingsComponent } from "../../componets/landingbookings/landingbookings.component";


@Component({
  selector: 'app-bookingspage',
  imports: [BookingsboxesComponent , LandingbookingsComponent],
  templateUrl: './bookingspage.component.html',
  styleUrl: './bookingspage.component.scss'
})
export class BookingspageComponent {

}
