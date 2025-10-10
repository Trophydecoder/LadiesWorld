import { Component } from '@angular/core';
import { LandingContactComponent } from "../../componets/landing-contact/landing-contact.component";
import { ContactBoxesComponent } from "../../componets/contact-boxes/contact-boxes.component";
import { ContactComponent } from "../../componets/contact/contact.component";

@Component({
  selector: 'app-contact-page',
  imports: [LandingContactComponent, ContactBoxesComponent, ContactComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
