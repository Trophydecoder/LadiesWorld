import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [ FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = {
    email: '',
    name: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contact);
    alert(`Thanks ${this.contact.name}, we received your message!`);
    this.contact = { email: '', name: '', message: '' }; // reset form
  }
}
