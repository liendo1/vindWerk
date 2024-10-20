package com.backend.backend.mapper;

import com.backend.backend.dto.JobDto;
import com.backend.backend.enums.JobTypes;
import com.backend.backend.enums.WorkMode;
import com.backend.backend.model.Job;
import org.springframework.stereotype.Component;

@Component
public class JobMapper {

    public Job converToEntity(JobDto jobDto) {
        Job job = new Job();
        job.setTitle(jobDto.getTitle());
        job.setCity(jobDto.getCity());
        job.setSchool(jobDto.getSchool());
        job.setMinSalary(jobDto.getMinSalary());
        job.setMaxSalary(jobDto.getMaxSalary());
        job.setJobType(JobTypes.valueOf(jobDto.getType()));
        job.setWorkMode(WorkMode.valueOf(jobDto.getWorkMode()));
        return job;
    }

    public JobDto convertToDTO(Job job) {
        JobDto jobDTO = new JobDto();
        jobDTO.setId(job.getId());
        jobDTO.setTitle(job.getTitle());
        jobDTO.setCity(job.getCity());
        jobDTO.setMinSalary(job.getMinSalary());
        jobDTO.setMaxSalary(job.getMaxSalary());
        jobDTO.setType(job.getJobType().toString());
        jobDTO.setWorkMode(job.getWorkMode().toString());
        return jobDTO;
    }

}
