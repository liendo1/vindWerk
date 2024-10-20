import { Routes } from '@angular/router';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {JobCreateComponent} from '../component/job/job-create/job-create.component';

export const routes: Routes = [
  {path:'', component: HomePageComponent, title: 'home'},
  {path:'job', children: [
      {path: '', component: JobCreateComponent, title:'Maak een vacature aan'}
    ]}
];
