package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.JobApplication;
import com.example.demo.repository.JobApplicationRepository;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    public JobApplication saveApplication(JobApplication jobApplication) {
        return jobApplicationRepository.save(jobApplication);
    }
}
