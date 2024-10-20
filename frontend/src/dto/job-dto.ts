import {WorkMode} from '../enums/work-mode.enum';
import {JobType} from '../enums/job-type.enum';


export class JobDto {
  title: string;
  city: string;
  school: string;
  minSalary: number;
  maxSalary: number;
  type: JobType; // FULL_TIME or PART_TIME
  hours: number;
  workMode: WorkMode; // ONSITE, REMOTE, or HYBRID

  constructor(
    title: string,
    city: string,
    school: string,
    minSalary: number,
    maxSalary: number,
    type: JobType,
    hours: number,
    workMode: WorkMode
  ) {
    this.title = title;
    this.city = city;
    this.school = school;
    this.minSalary = minSalary;
    this.maxSalary = maxSalary;
    this.type = type;
    this.hours = hours;
    this.workMode = workMode;
  }
}
