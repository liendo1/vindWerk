import { Routes } from '@angular/router';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {JobCreateComponent} from '../component/job/job-create/job-create.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';

export const routes: Routes = [
  {path:'', component: HomePageComponent, title: 'home'},
  {path:'register', component: RegisterPageComponent, title: 'register page'},
  {path:'login', component: LoginPageComponent, title: 'login page' },
  {path:'job', children: [
      {path: '', component: JobCreateComponent, title:'Maak een vacature aan'}
    ]}
];
