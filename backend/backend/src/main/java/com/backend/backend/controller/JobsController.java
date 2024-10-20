package com.backend.backend.controller;

import com.backend.backend.dto.JobDto;
import com.backend.backend.mapper.JobMapper;
import com.backend.backend.model.Job;
import com.backend.backend.model.JobBenefit;
import com.backend.backend.service.JobsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/job")
public class JobsController {

    private final JobsService jobsService;
    private final JobMapper jobMapper;


    public JobsController(JobsService jobsService, JobMapper jobMapper) {
        this.jobsService = jobsService;
        this.jobMapper = jobMapper;
    }

    @GetMapping()
    public ResponseEntity<List<JobDto>> getJobs() {
        List<Job> jobList = this.jobsService.getAllJobs();
        List<JobDto> jobDtoList = jobList.stream()
                .map(jobMapper::convertToDTO)
                .toList();

        return ResponseEntity.ok(jobDtoList);
    }

    @PostMapping()
    public ResponseEntity<JobDto> addJob(@RequestBody JobDto jobDTO) {
        Job job = jobMapper.converToEntity(jobDTO);
        Job savedJob = jobsService.saveJob(job);

        List<JobBenefit> benefits = savedJob.getJobBenefits().stream()
                .map(benefit -> new JobBenefit(null, benefit.getBenefit(), savedJob))
                .collect(Collectors.toList());

        JobDto savedJobDto = jobMapper.convertToDTO(savedJob);
        return ResponseEntity.ok(savedJobDto);
    }

}
