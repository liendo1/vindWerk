package com.backend.backend.mapper;

import com.backend.backend.dto.JobDto;
import com.backend.backend.enums.JobTypes;
import com.backend.backend.enums.WorkMode;
import com.backend.backend.model.Job;
import com.backend.backend.model.JobBenefit;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

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
        job.setMinHours(jobDto.getMinHours());
        job.setMaxHours(jobDto.getMaxHours());
        job.setDescription(jobDto.getDescription());
        if (jobDto.getBenefits() != null) {
            List<JobBenefit> jobBenefits = jobDto.getBenefits().stream()
                    .map(benefit -> new JobBenefit(null, benefit, job))
                    .collect(Collectors.toList());
            job.setJobBenefits(jobBenefits);
        }

        return job;
    }

    public JobDto convertToDTO(Job job) {
        JobDto jobDTO = new JobDto();
        jobDTO.setId(job.getId());
        jobDTO.setTitle(job.getTitle());
        jobDTO.setMinHours(job.getMinHours());
        jobDTO.setMaxHours(job.getMaxHours());
        jobDTO.setSchool(job.getSchool());
        jobDTO.setCity(job.getCity());
        jobDTO.setMinSalary(job.getMinSalary());
        jobDTO.setMaxSalary(job.getMaxSalary());
        jobDTO.setType(job.getJobType().toString());
        jobDTO.setWorkMode(job.getWorkMode().toString());
        if (job.getJobBenefits() != null) {
            List<String> benefits = job.getJobBenefits().stream()
                    .map(JobBenefit::getBenefit)
                    .collect(Collectors.toList());
            jobDTO.setBenefits(benefits);
        }
        return jobDTO;
    }

}
