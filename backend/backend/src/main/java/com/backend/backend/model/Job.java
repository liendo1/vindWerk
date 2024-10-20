package com.backend.backend.model;

import com.backend.backend.enums.JobTypes;
import com.backend.backend.enums.WorkMode;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "jobs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String city;
    private String school;
    private Double minSalary;
    private Double maxSalary;

    @Enumerated(EnumType.STRING)
    private JobTypes jobType;

    @Enumerated(EnumType.STRING)
    private WorkMode workMode;

    private Integer minHours;
    private Integer maxHours;
}
