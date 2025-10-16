import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BookingspageComponent } from './pages/bookingspage/bookingspage.component';
import { ShoppageComponent } from './pages/shoppage/shoppage.component';
import { ServicespageComponent } from './pages/servicespage/servicespage.component';
import { ProductDescpageComponent } from './pages/product-descpage/product-descpage.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [

    {path :'' , title:'home-page' , component:HomepageComponent},
    {path:'services-page' , title:'servcies-page' , component:ServicespageComponent},
    {path :'bookings-page' , title:'bookings-page' , component:BookingspageComponent},
    {path :'shop-page' , title:'shop-page' , component:ShoppageComponent},
    {path :'prod-desc' , title:'prod-desc' , component:ProductDescpageComponent},
    {path :'contact-page' , title:'contact-page' , component:ContactPageComponent},
];
