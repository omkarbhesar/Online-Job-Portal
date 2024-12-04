import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import './JobApplication.css';

function JobApplication() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        dateOfBirth: "",
        email: "",
        course: "",
        college: "",
        university: "",
        percentage: "",
        skill1: "",
        proficiency: "Beginner",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8082/api/submitApplication", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Your application has successfully been submitted.");
                navigate('/JobOpenings');
            } else {
                const errorMessage = await response.text();
                setError(errorMessage || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Unable to connect to the server. Please try again later.");
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            fatherName: "",
            dateOfBirth: "",
            email: "",
            course: "",
            college: "",
            university: "",
            percentage: "",
            skill1: "",
            proficiency: "Beginner",
        });
        setError("");
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-8">
                    <div className="bg-light p-4 rounded shadow">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-center mb-4">Job Application</h2>

                            {/* Error Message */}
                            {error && <div className="alert alert-danger">{error}</div>}

                            {/* Form Fields */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="fatherName" className="form-label">Father Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fatherName"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="course" className="form-label">Course</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="college" className="form-label">College</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="college"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="university" className="form-label">University</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="university"
                                        name="university"
                                        value={formData.university}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="percentage" className="form-label">Percentage</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="percentage"
                                        name="percentage"
                                        value={formData.percentage}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="skill1" className="form-label">Skill</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="skill1"
                                        name="skill1"
                                        value={formData.skill1}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="proficiency" className="form-label">Proficiency</label>
                                    <select
                                        className="form-select"
                                        id="proficiency"
                                        name="proficiency"
                                        value={formData.proficiency}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary" id='btn11'>Submit</button>
                                <button type="button" className="btn btn-secondary" onClick={() => navigate('/JobOpenings')} id='btn11'>Cancel</button>
                                <button type="button" className="btn btn-warning" onClick={handleReset} id='btn11'>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobApplication;
