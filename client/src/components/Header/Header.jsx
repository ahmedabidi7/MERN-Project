import React , { useState } from 'react'
import "./Header.css";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/services?search=${input}`);
  };
  return (

    <section className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container">

        <div className='flexColStart hero-left'>
          <div className='flexColStart hero-title'>
            <h1>Connecting  </h1>
            <h1> Lawyers and </h1> 
            <h1>property</h1>
               
             
          </div>
          <div className='flexColStart hero-des'>
            <span> Estichara is the go-to platform</span><br/>
      
            <span>for law consultants and clients alike.</span>
          </div>
          <div className='flexCenter search-bar'>
          <input
          className='input'
          type="text"
          
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='button'
        onClick={handleSubmit}>Search</button>
          </div>
          <div className='flexCenter stats'>
             < div className='flexStart stat'>
              <span className='num'>
                <CountUp  start={1} end={40} duration={6} />
                <span>+</span><br/>
                <span className='secondatyText'>
                  Consultant
                </span>
              </span>
             </div>
             < div className='flexStart stat'>
              <span className='num'>
                <CountUp start={1} end={60} duration={6} />
                <span>+</span><br/>
                <span  className='secondatyText'>
                  Happy Customer
                </span>
              </span>
             </div>
             < div className='flexStart stat'>
              <span className='num'>
                <CountUp start={1} end={6} duration={6} />
                <span>+</span><br/>
                <span  className='secondatyText'>
                  Awards
                </span>
              </span>
             </div>
          </div>
        </div>
        <div className='flexCenter hero-right'>
         <div className='image-container'>
          <img  src="https://img.freepik.com/premium-photo/law-legal-system-justice-crime-concept-mallet-gavel-hammer-scales-table-d-render-illustration_628331-196.jpg" alt="law" />
         </div>
      </div>
      </div>
    </section>
  )
}

export default Header