package com.backend.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobDto {
    private Long id;
    private String title;
    private String city;
    private String school;
    private Double minSalary;
    private Double maxSalary;
    private String type; // FULL_TIME or PART_TIME
    private Integer hours;
    private String workMode; // ONSITE, REMOTE, or HYBRID
}
