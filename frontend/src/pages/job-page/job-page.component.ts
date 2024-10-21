import { Component } from '@angular/core';
import {JobCreateComponent} from '../../component/job/job-create/job-create.component';
import {JobPreviewComponent} from '../../component/job/job-preview/job-preview.component';

@Component({
  selector: 'app-job-page',
  standalone: true,
  imports: [
    JobCreateComponent,
    JobPreviewComponent
  ],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css'
})
export class JobPageComponent {

}
