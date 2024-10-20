package com.backend.backend.controller;

import com.backend.backend.dto.JobDto;
import com.backend.backend.mapper.JobMapper;
import com.backend.backend.model.Job;
import com.backend.backend.service.JobsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<String> getJobs() {
        return ResponseEntity.ok("{\"message\": \"hello\"}");
    }

    @PostMapping()
    public ResponseEntity<JobDto> addJob(@RequestBody JobDto jobDTO) {
        // Convert DTO to entity
        Job job = jobMapper.converToEntity(jobDTO);

        // Save the job
        Job savedJob = jobsService.saveJob(job);
        // Convert the saved entity back to DTO
        JobDto savedJobDto = jobMapper.convertToDTO(savedJob);
        // Return the saved job as a ResponseEntity
        return ResponseEntity.ok(savedJobDto);
    }

}
