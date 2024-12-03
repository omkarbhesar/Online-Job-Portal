package com.example.demo.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

/**
 * LoginRequest is a DTO for encapsulating login request data.
 */
public class LoginRequest {

    @Email(message = "Invalid email format")
    @NotEmpty(message = "Email is required")
    private String email;

    @NotEmpty(message = "Password is required")
    private String password;

    // Default constructor
    public LoginRequest() {
    }

    // Parameterized constructor for convenience
    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginRequest{" +
                "email='" + email + '\'' +
                ", password='[PROTECTED]'" + // Avoid exposing sensitive data
                '}';
    }
}
