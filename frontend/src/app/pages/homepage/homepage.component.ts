import { Component } from '@angular/core';
import { NavComponent } from "../../componets/global/nav/nav.component";
import { LandingComponent } from "../../componets/landing/landing.component";
import { AboutusComponent } from "../../componets/aboutus/aboutus.component";
import { ButtonsComponent } from "../../componets/buttons/buttons.component";
import { FooterComponent } from "../../componets/footer/footer.component";
import { ContactComponent } from "../../componets/contact/contact.component";

@Component({
  selector: 'app-homepage',
  imports: [NavComponent, LandingComponent, AboutusComponent, ButtonsComponent,ContactComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
