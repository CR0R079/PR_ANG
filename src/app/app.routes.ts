import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { usuario } from './usuario/usuario';


export const routes: Routes = 
[
    {
        path: 'login',component: Login, 
    },

    {
        path: 'home', component: Home,
    },

    {
        path: 'usuario', component: usuario,
    },

    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirección inicial

];
