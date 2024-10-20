package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "job_benefits")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobBenefit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String benefit;

    @ManyToOne
    @JoinColumn(name = "job_id", nullable = false)
    private Job job;
}
