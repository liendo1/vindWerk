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
    return this.http.get<JobDto[]>(`${this.baseUrl}/job`);
  }

  createJob(jobDto: JobDto): Observable<JobDto> {
   return this.http.post<JobDto>(`${this.baseUrl}/job`, jobDto);
  }
}
