package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.User;

public interface Userrepository extends JpaRepository<User, Long> {
    User findByEmail(String email); // Optional method to find users by email
}
