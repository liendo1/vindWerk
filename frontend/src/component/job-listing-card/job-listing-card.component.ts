import {Component, Input, OnInit} from '@angular/core';
import {JobDto} from '../../dto/job-dto';
import {JobType} from '../../enums/job-type.enum';
import {WorkMode} from '../../enums/work-mode.enum';

@Component({
  selector: 'app-job-listing-card',
  standalone: true,
  imports: [],
  templateUrl: './job-listing-card.component.html',
  styleUrl: './job-listing-card.component.css'
})
export class JobListingCardComponent implements OnInit {
  @Input() job: JobDto | undefined;


  ngOnInit() {

  }


  getWorkModeDisplay(workMode: WorkMode | undefined): string {
    switch (workMode) {
      case WorkMode.ONSITE:
        return 'Onsite';
      case WorkMode.REMOTE:
        return 'Remote';
      case WorkMode.HYBRID:
        return 'Hybrid';
      default:
        return 'Unknown';
    }
  }

  // Method to convert JobType enum to a readable string
  getJobTypeDisplay(type: JobType | undefined): string {
    switch (type) {
      case JobType.FULL_TIME:
        return 'Full-Time';
      case  JobType.PART_TIME:
        return 'Part-Time';
      case JobType.BOTH:
        return 'Both';
      default:
        return 'Unknown';
    }
  }
}
