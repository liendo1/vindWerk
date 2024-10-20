import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {JobService} from '../../../service/job.service';
import {reportUnhandledError} from 'rxjs/internal/util/reportUnhandledError';
import {WorkMode} from '../../../enums/work-mode.enum';
import {JobType} from '../../../enums/job-type.enum';



@Component({
  selector: 'app-job-create',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './job-create.component.html',
  styleUrl: './job-create.component.css'
})
export class JobCreateComponent implements OnInit {

  jobForm: FormGroup;
  workModes = WorkMode;
  jobTypes = JobType;

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = this.fb.group({
      title: [''],
      city: [''],
      school: [''],
      minSalary: [''],
      maxSalary: [''],
      hours: [''],
      jobType: [''],
      workMode:['']
    });
  }

  ngOnInit() {}

  submitForm(){
    let formValues = this.jobForm.value;
    this.jobService.createJob(formValues).subscribe( result => {
      console.log("this job has been added: ", result)
    })

  }


}
