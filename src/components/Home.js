import React from 'react'
import Logo from '../Assets/Logo.png'
import { useNavigate } from "react-router-dom";
import './Home.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


function Home() {
  const navigate = useNavigate();

 /* const handleButtonClick = (event) => {
    event.preventDefault();
    navigate("/Login"); // Navigate to the Login component
  }*/
  const handleButtonClick1 = (event) => {
    event.preventDefault();
    navigate("/JobOpenings"); // Navigate to the Jobavailability component
  }
  const handleButtonClick2 = (event) => {
    event.preventDefault();
    navigate("/MockTest"); // Navigate to the Jobavailability component
  }


  return (

   <div className="p-20 mb-10 bg-black text-white">
      <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">
              <img src={Logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-center" />
              
              
      Workfolio
      <button  type="button"onClick={handleButtonClick2} className="btn btn-outline-dark">Mock Test</button>
      <button  type="button"onClick={handleButtonClick1} className="btn btn-outline-dark">Find Job</button>
      
    </a>
  </div>
  
  
</nav>
<div className="content">
    <h1>Find The Perfect job That you Deserved</h1>
  </div>
<div className="footer">
     <div className="footer-content">
       <div className="footer-copyright">
        <p>&copy; 2024 Workfolio. All Rights Reserved. </p>
       </div>
       <div className="footer-social">
        
       <a href="https://facebook.com/" target='_blank' className='social-button facebook' id='facebook'>
        <i className="fab fa-facebook"></i>
        </a>
        <a href="https://x.com/" target='_blank' className='social-button twitter' id='twitter'>
        <i className="fab fa-twitter"></i>
        </a>

        <a href="https:www.instagram.com/" target='_blank' className='social-button instagram' id='instagram'>
        <i className="fab fa-instagram"></i>
        </a>

        <a href="https:www.linkedin.com/" target='_blank' className='social-button linkedin' id='linkedin'>
        <i className="fab fa-linkedin"></i>
        </a>


       </div>
     </div>
</div>
    
</div>



    
  )
}
export default Home
