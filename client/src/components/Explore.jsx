import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Explore.css';

const Explore = () => {
  return (
    <div className="add1">
      <Navbar />
      <div className="explore-container">
        <h1 className="explore-title">Explore Page</h1>
        

        <div className="explore-categories">
          <div className='f1'>
          <h3>Estichar</h3>
          <span>
          LegalConnect is an innovative web platform that facilitates seamless communication and collaboration between Estichara and clients. Whether you're a law consultant seeking to offer your services or a client in need of legal assistance, LegalConnect is here to bridge the gap and provide a smooth, user-friendly experience.
          </span>
          </div>
          <div className='f1'>
          <h3>Services for Legal Consultants</h3>
          <span>
          Estichara can easily sign up and create their profiles on LegalConnect. They can showcase their areas of expertise, qualifications, and experience, making it convenient for potential clients to find them. Consultants have the option to add their services, set availability for appointments, and manage their schedule efficiently.
          </span>
          </div>
          <div className='f1'>
          <h3>Client Services and Appointment Booking</h3>
          <span>
          Clients looking for legal advice and assistance can browse through a comprehensive list of legal services provided by registered consultants. Each service is accompanied by a detailed description, making it easy for clients to understand the scope and benefits of the service. Clients can choose a suitable consultant based on their specialization and book appointments directly through the platform.
          </span>
          </div>
          <div className='f1'>
          <h3>Secure Online Payments</h3>
          <span>
          Estichara can easily sign up and create their profiles on LegalConnect. They can showcase their areas of expertise, qualifications, and experience, making it convenient for potential clients to find them. Consultants have the option to add their services, set availability for appointments, and manage their schedule efficiently.
          </span>
          </div>
          <div className='f1'>
          <h3>Virtual Consultations</h3>
          <span>
          LegalConnect ensures secure and hassle-free payment processing. Clients can conveniently pay for their chosen services through various payment methods. The platform employs state-of-the-art encryption technology to protect sensitive payment information and ensure a safe transaction experience.
          </span>
          </div>
          <div className='f1'>
          <h3>Client Support</h3>
          <span>
          The website offers a cutting-edge video call feature, enabling clients to connect with their chosen legal consultant virtually. This facilitates face-to-face discussions, enabling clients to seek personalized advice and clarifications. The video call feature enhances the overall client experience and fosters a sense of trust and transparency between the consultant and the client.          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;