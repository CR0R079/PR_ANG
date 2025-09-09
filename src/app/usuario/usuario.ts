import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css']
})
export class usuario{
  // URLs de las imágenes de avatar
  userAvatarUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUfsYI6qf0ab6Z68NJLKD94eL33plyq_9eLIqIfAL24gYgRnmevyG3dsld_xZP2MVo0Kp2UYgCUTkJMtmQ879k-UszcbHZl35KpXrEswZUDPtejGaiKIUNGutXi7ua60YFE8lb8Ej_juaP6RUY7K8QYHhZB7SxyjrKVuzXzEP9uO5IFUi4K8mO8tTj_662oT-R8bQTky-pHvad5Qd_i973PJUeBi1rWQiIddu0LmVJtVV6Mi1vPyhPuyIJa-V6tAxDYNurTH0zPg';
  userMainAvatarUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA4hCJlFBucw0TkiiWOC1QFdotW_i43Lkv9br6IdMRDF4LJCW0tbpWVVKQsWLWRrgEWc1RBGeK5_sx--lMwIsQZSFJbrlsNUYE5F-X3-NhTE6KWMk_vL2cDHOa2HVp8afFHkbiQRIkIyCJADZsTflfGDDa0sSO2Ajg0KSJJVPATOB4FZaTA8-MMWE1F0pWrXx9ue8Z29dHTHlOLxQoYhw7yYVBZvKGjvY9Rcc8j5vJ6MFPtolFsgE8CD9SFW06bngukieRYgGa7w';

  // Datos para el header y tarjetas
  user = {
    fullName: 'Sofia Rodriguez',
    position: 'Desarrollador de Software',
    dni: '12345678A',
    phone: '+34 666 777 888',
    birthDate: '15/03/1993'
  };

  // Datos para el formulario
  usuario = {
    firstName: 'Sofia',
    lastName: 'Rodriguez',
    gender: 'femenino',
    address: 'Calle Principal, 123',
    city: 'Madrid',
    postalCode: '28001',
    country: 'España'
  };

  // Información laboral
  workInfo = {
    department: 'Tecnología',
    startDate: '01/01/2020',
    contractType: 'Indefinido',
    schedule: '9:00 - 18:00'
  };

  // Porcentaje de progreso
  progressPercentage = 75;
}