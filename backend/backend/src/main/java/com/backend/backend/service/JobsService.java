package com.backend.backend.service;

import com.backend.backend.model.Job;
import com.backend.backend.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsService {

    private final JobsRepository jobsRepository;


    @Autowired
    public JobsService(JobsRepository jobsRepository) {
        this.jobsRepository = jobsRepository;
    }

    public List<Job> getAllJobs() {
        return jobsRepository.findAll();
    }

    public Job saveJob(Job job) {
        return jobsRepository.save(job);
    }


}
