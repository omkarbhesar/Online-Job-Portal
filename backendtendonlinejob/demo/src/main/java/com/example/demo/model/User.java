package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "registration")
public class User {
    @Id
    private String username;
    private String email;
    private String password;
    private String cpassword;
        public User() {
        
        }

    public User(String username,String email,String password,String cpassword){
        this.username = username;
        this.email = email;
        this.password = password;
        this.cpassword = cpassword;
    }

    public String getUsername(){
        return username;
    }

    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password;
    }

    public String getCpassword(){
        return cpassword;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public void setCpassword(String cpassword){
        this.cpassword = cpassword;
    }

}
