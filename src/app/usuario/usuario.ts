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
export class usuario {}