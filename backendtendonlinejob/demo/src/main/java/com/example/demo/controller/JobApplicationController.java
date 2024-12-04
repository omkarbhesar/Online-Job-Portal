package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.JobApplication;
import com.example.demo.service.JobApplicationService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping("/submitApplication")
    public ResponseEntity<?> submitApplication(@RequestBody JobApplication jobApplication) {
        try {
            JobApplication savedApplication = jobApplicationService.saveApplication(jobApplication);
            return ResponseEntity.ok(savedApplication); // Return the saved application
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error submitting application: " + e.getMessage());
        }
    }
}

