import { Component } from '@angular/core';
import {HomeComponent} from '../../component/home/home.component';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {SearchComponent} from '../../component/search/search.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeComponent,
    NavbarComponent,
    SearchComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
