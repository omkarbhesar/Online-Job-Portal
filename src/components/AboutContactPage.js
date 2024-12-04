import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import student1 from '../Assets/student1.jpg'
 
// Sample data for the About Us Section (You can replace it with dynamic data)
const students = [
 { name: 'John Doe', image: student1 , company: 'TechCorp', package: '10 LPA' },
 { name: 'Jane Smith', image: student1 , company: 'DevSolutions', package: '8 LPA' },
 { name: 'Sam Wilson', image: student1 , company: 'CodeWorks', package: '12 LPA' },
 { name: 'Alice Johnson', image: student1 , company: 'InnovateX', package: '9 LPA' },
 { name: 'Mark Lee', image: student1 , company: 'FutureTech', package: '11 LPA' },
 { name: 'Sophia Brown', image: student1 , company: 'WebWorks', package: '7 LPA' },
];
 
const AboutContactPage = () => {
 const [formData, setFormData] = useState({ name: '', email: '', message: '' });
 const [alertMessage, setAlertMessage] = useState('');
 
 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({ ...prevData, [name]: value }));
 };
 
 const handleSubmitForm = (e) => {
   e.preventDefault();
   // Assuming a backend API or email service is set up to handle sending emails
   // For now, we'll just show a success message on form submission
   setAlertMessage('Your message has been sent successfully!');
   setFormData({ name: '', email: '', message: '' });
 };
 
 return (
   <Container>
     {/* About Us Section */}
     <section id="about-us" className="my-5">
       <h2 className="text-center mb-4">Our Placed Students</h2>
       <Row>
         {students.map((student, index) => (
           <Col key={index} md={4} className="mb-4">
             <Card>
               <Card.Img variant="top" src={student.image}  style={{ width: '200px', height: '150px' }}/>
               <Card.Body>
                 <Card.Title>{student.name}</Card.Title>
                 <Card.Text>Company: {student.company}</Card.Text>
                 <Card.Text>Package: {student.package}</Card.Text>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
     </section>
 
     {/* Contact Us Section */}
     <section id="contact-us" className="my-5">
       <h2 className="text-center mb-4">Contact Us</h2>
       {alertMessage && <Alert variant="success">{alertMessage}</Alert>}
       <Form onSubmit={handleSubmitForm}>
         <Row>
           <Col md={6} className="mb-3">
             <Form.Group controlId="formName">
               <Form.Label>Name</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="Enter your name"
                 name="name"
                 value={formData.name}
                 onChange={handleInputChange}
                 required
               />
             </Form.Group>
           </Col>
           <Col md={6} className="mb-3">
             <Form.Group controlId="formEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                 type="email"
                 placeholder="Enter your email"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 required
               />
             </Form.Group>
           </Col>
         </Row>
         <Form.Group controlId="formMessage" className="mb-3">
           <Form.Label>Message</Form.Label>
           <Form.Control
             as="textarea"
             rows={4}
             placeholder="Your message"
             name="message"
             value={formData.message}
             onChange={handleInputChange}
             required
           />
         </Form.Group>
         <div className="text-center">
           <Button variant="primary" type="submit">Send Mail</Button>
         </div>
       </Form>
     </section>
   </Container>
 );
};
 
export default AboutContactPage;