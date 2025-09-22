import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { User } from './User/usuario';
import { Register } from './Register/registrar';

export const routes: Routes = 
[
    {
        path: 'login',component: Login, 
    },

    {
        path: 'home', component: Home,
    },

    {
        path: 'usuario', component: User,
    },
    {
        path: 'register', component: Register,
    },

    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirección inicial

];


