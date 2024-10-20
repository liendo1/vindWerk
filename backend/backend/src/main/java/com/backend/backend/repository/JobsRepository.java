package com.backend.backend.repository;

import com.backend.backend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobsRepository extends JpaRepository<Job,Long> {
}
