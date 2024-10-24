import { Routes } from '@angular/router';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {JobCreateComponent} from '../component/job/job-create/job-create.component';
import {LoginRegisterPageComponent} from '../pages/login-register-page/login-register-page.component';

export const routes: Routes = [
  {path:'', component: HomePageComponent, title: 'home'},
  {path:'register', component: LoginRegisterPageComponent, title: 'register page'},
  {path:'job', children: [
      {path: '', component: JobCreateComponent, title:'Maak een vacature aan'}
    ]}
];
