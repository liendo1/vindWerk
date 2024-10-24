import { Component } from '@angular/core';
import {JobCreateComponent} from '../../component/job/job-create/job-create.component';
import {JobDetailCardComponent} from '../../component/job-detail-card/job-detail-card.component';
import {JobListingCardComponent} from '../../component/job-listing-card/job-listing-card.component';

@Component({
  selector: 'app-job-page',
  standalone: true,
  imports: [
    JobCreateComponent,
    JobDetailCardComponent,
    JobListingCardComponent
  ],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css'
})
export class JobPageComponent {

}
