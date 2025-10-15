import { Component } from '@angular/core';
import { services } from '../../fakedatabase/services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-servicesbuttons',
  imports: [CommonModule , FormsModule ],
  templateUrl: './servicesbuttons.component.html',
  styleUrl: './servicesbuttons.component.scss'
})
export class ServicesbuttonsComponent {
  //declarations always on top
  services = services;
  filteredServices = [...this.services];  



    onCategoryChange(event: Event) {
      const category = (event.target as HTMLSelectElement).value; // type-safe
      switch(category) {
        case 'all':
          this.showAll();
          break;
        case 'styling':
          this.showStyling();
          break;
        case 'special':
          this.showSpecialOccasion();
          break;
        case 'convenience':
          this.showConvenience();
          break;
      }
    }
    


  showAll() {
    
    this.filteredServices = [...this.services];
  }

  showStyling() {
    this.filteredServices = this.services.filter(
      service => service.category.toLowerCase() === 'styling'
    );
  }

  showSpecialOccasion() {
    this.filteredServices = this.services.filter(
      service => service.category.toLowerCase() === 'special occasion'
    );
  }

  showConvenience() {
    this.filteredServices = this.services.filter(
      service => service.category.toLowerCase() === 'convenience'
    );
  }
}