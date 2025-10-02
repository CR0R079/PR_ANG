import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Agregar esto

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Agregar CommonModule
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  showModal = true; // Cambiar a true para que se muestre al inicio

  constructor() {
    // Ya no uses localStorage aquí
  }

  modal_close() {
    this.showModal = false;
    // Si realmente necesitas localStorage, úsalo solo en tu entorno local
    // localStorage.setItem('modalDisplayed', 'true');
  }
}