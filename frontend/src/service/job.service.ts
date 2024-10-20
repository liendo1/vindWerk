import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JobDto} from '../dto/job-dto';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllJobs() {
    return this.http.get<string>(`${this.baseUrl}/job`);
  }

  createJob(formValues: any): Observable<JobDto> {
    let newJobDto = new JobDto(formValues.title,formValues.city,formValues.school,formValues.minSalary,formValues.maxSalary,formValues.jobType,formValues.workMode,formValues.minHours, formValues.maxHours)
    console.log('this was created: ', newJobDto)
    return this.http.post<JobDto>(`${this.baseUrl}/job`, newJobDto);
  }
}
