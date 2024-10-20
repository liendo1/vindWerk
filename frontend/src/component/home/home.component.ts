import {Component, OnInit} from '@angular/core';
import {JobListingCardComponent} from '../job-listing-card/job-listing-card.component';
import {JobDetailCardComponent} from '../job-detail-card/job-detail-card.component';
import {JobService} from '../../service/job.service';
import {JobDto} from '../../dto/job-dto';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JobListingCardComponent,
    JobDetailCardComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  jobsList:JobDto[] = [];

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe(
      (jobs: JobDto[]) => {
        this.jobsList = jobs;
      },
      (error) => {
        console.error("Error fetching jobs:", error);
      }
    );
  }







}
function ngOnInit() {
    throw new Error('Function not implemented.');
}

