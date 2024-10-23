import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {JobService} from '../../../service/job.service';
import {reportUnhandledError} from 'rxjs/internal/util/reportUnhandledError';
import {WorkMode} from '../../../enums/work-mode.enum';
import {JobType} from '../../../enums/job-type.enum';
import {JobDto} from '../../../dto/job-dto';



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
      title: ['', Validators.required],
      city: ['', Validators.required],
      school: ['', Validators.required],
      minSalary: ['', [Validators.required, Validators.min(0)]],
      maxSalary: ['', [Validators.required, Validators.min(0)]],
      jobType: ['', Validators.required],
      workMode: ['', Validators.required],
      minHours: ['', [Validators.required, Validators.min(0)]],
      maxHours: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {}

  submitForm(){
    let formValues = this.jobForm.value;
    let newJobDto = new JobDto(formValues.title,formValues.city,formValues.school,formValues.minSalary,formValues.maxSalary,formValues.jobType,formValues.workMode,formValues.minHours, formValues.maxHours)

    this.jobService.createJob(newJobDto).subscribe()
  }


}
