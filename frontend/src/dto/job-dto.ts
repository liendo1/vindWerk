import {WorkMode} from '../enums/work-mode.enum';
import {JobType} from '../enums/job-type.enum';


export class JobDto {
  title: string;
  city: string;
  school: string;
  minSalary: number;
  maxSalary: number;
  type: JobType; // FULL_TIME or PART_TIME
  workMode: WorkMode; // ONSITE, REMOTE, or HYBRID
  minHours:number;
  maxHours:number;

  constructor(
    title: string,
    city: string,
    school: string,
    minSalary: number,
    maxSalary: number,
    type: JobType,
    workMode: WorkMode,
    minHours: number,
    maxHours: number,
  ) {
    this.title = title;
    this.city = city;
    this.school = school;
    this.minSalary = minSalary;
    this.maxSalary = maxSalary;
    this.type = type;
    this.workMode = workMode;
    this.minHours = minHours;
    this.maxHours = maxHours;
  }
}
