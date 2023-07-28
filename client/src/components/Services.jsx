
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Services.css';

function Services(props) {
  const [services, setServices] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/services', { withCredentials: true })
      .then(res => {
        setServices(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 401) {
          nav("/unauthorized", { replace: true });
        }
      });
  }, []);




  return (
    <div className="add1">
    
    <Navbar/>
    <div className="gigs">
      <div className="container">
        <h1>Services</h1>
      
        <div className="cards">
          {services.map((service, i) => (
            <div key={service._id} className="gigCard">
              {/* Render each service as a GigCard */}
              <div className="cardInfo">
                <h3>{service.name}</h3><br/>

                <p>{service.category}</p><br/>
                <p>{service.price} DT</p>
              </div>
              <div className="cardActions">
                <Link to={`/pay/${service._id}`} className="btn btn-success">
                  Add Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
}

export default Services;
