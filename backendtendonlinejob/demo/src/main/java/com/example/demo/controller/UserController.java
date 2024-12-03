package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.UserService;

import com.example.demo.model.User;
import com.example.demo.model.LoginRequest; // Custom DTO for login

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    // Registration endpoint
    @PostMapping("/registration")
    public User register(@RequestBody User user){
        return userService.saveUser(user);
    }

    // Login endpoint
    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
    User user = userService.findByEmail(loginRequest.getEmail());

    // Check if user exists and password matches
    if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
        return ResponseEntity.ok(user); // Return 200 OK with user details
    } else {
        // Return 401 Unauthorized with a custom error message
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body("Invalid email or password. Please try again.");
    }
}

}