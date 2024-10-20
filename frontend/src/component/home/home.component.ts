import { Component } from '@angular/core';
import {JobListingCardComponent} from '../job-listing-card/job-listing-card.component';
import {JobDetailCardComponent} from '../job-detail-card/job-detail-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JobListingCardComponent,
    JobDetailCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
