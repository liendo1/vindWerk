import { Routes } from '@angular/router';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {HomePageComponent} from '../pages/home-page/home-page.component';

export const routes: Routes = [
  {path:'', component: LoginPageComponent, title:'login'},
  {path:'home', component: HomePageComponent, title: 'home'},
];
