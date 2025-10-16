import { Component } from '@angular/core';
import { EventEmitter , Input , Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { products } from '../../../fakedatabase/products';
@Component({
  selector: 'app-sidecart',
  imports: [ FormsModule  , CommonModule],
  templateUrl: './sidecart.component.html',
  styleUrl: './sidecart.component.scss'
})
export class SidecartComponent {
  products =products
  @Input() open = false;
  
  @Output() closeCart = new EventEmitter<void>();
}
