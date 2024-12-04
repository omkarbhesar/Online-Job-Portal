import './Registration.css'; // Import your CSS file
import React, { useState } from 'react';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (user.password !== user.cpassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Form submitted:', user);
    alert("Registration Complete");

    fetch('http://localhost:8082/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log('Response:', response);
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        setUser({
          username: '',
          email: '',
          password: '',
          cpassword: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}> 
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="cpassword"
            placeholder="Confirm your password"
            value={user.cpassword}
            onChange={handleChange}
            required
          />

          <button type="submit" id="signup">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
