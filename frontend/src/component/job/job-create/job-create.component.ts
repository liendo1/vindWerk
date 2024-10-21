import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {JobService} from '../../../service/job.service';
import {WorkMode} from '../../../enums/work-mode.enum';
import {JobType} from '../../../enums/job-type.enum';
import {NgForOf} from '@angular/common';



@Component({
  selector: 'app-job-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
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
      maxHours: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      benefits: this.fb.array([this.fb.control('')]),
      expectations: this.fb.array([this.fb.control('')]),
    });

  }

  ngOnInit() {}

  submitForm(){
    let formValues = this.jobForm.value;
    this.jobService.createJob(formValues).subscribe()
  }
  get benefits(): FormArray {
    return this.jobForm.get('benefits') as FormArray;
  }

  get expectations():FormArray {
    return this.jobForm.get('expectations') as FormArray;
  }

  addExpectation(){
    this.expectations.push(this.fb.control(''));
  }

  removeExpectation(index: number) {
    if (this.expectations.length > 1) {
      this.expectations.removeAt(index);
    }
  }

  addBenefit(): void {
    this.benefits.push(this.fb.control(''));
  }

  removeBenefit(index: number): void {
    if (this.benefits.length > 1) { 
      this.benefits.removeAt(index);
    }
  }
}
