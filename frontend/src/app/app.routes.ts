import { Routes } from '@angular/router';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {JobPageComponent} from '../pages/job-page/job-page.component';

export const routes: Routes = [
  {path:'', component: HomePageComponent, title: 'home'},
  {path:'job', children: [
      {path: '', component: JobPageComponent, title:'Maak een vacature aan'}
    ]}
];
