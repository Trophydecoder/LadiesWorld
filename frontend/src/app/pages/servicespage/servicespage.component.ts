import { Component } from '@angular/core';
import { ServiceslandingComponent } from "../../componets/serviceslanding/serviceslanding.component";
import { ServicesbuttonsComponent } from "../../componets/servicesbuttons/servicesbuttons.component";
import { NavComponent } from "../../componets/global/nav/nav.component";


@Component({
  selector: 'app-servicespage',
  imports: [ServiceslandingComponent, ServicesbuttonsComponent],
  templateUrl: './servicespage.component.html',
  styleUrl: './servicespage.component.scss'
})
export class ServicespageComponent {

}
