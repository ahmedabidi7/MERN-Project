import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios library
import "./Navbar.css";
import { useCookies } from "react-cookie";

const Navbar = (props) => {

  const [cookies, setCookie] = useCookies();

  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
      .then(res => {
        setCookie(null)
        console.log(res.data);
      })
      .catch(err => console.log(err));

    navigate('/');
  };

  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img className='img' src="https://images-ext-2.discordapp.net/external/oy4b7x17Wqn1TaNvdgFsn5GUXK-O-m-KLiAbfATf-pY/https/i.ibb.co/qnP66NH/Screenshot-2023-07-25-193023.png?width=373&height=395" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <Link to='/'>Home</Link>
          
        

          
          <Link to='/explore'>Explore</Link>

          {(cookies.userToken)? (
            // Render logout button if the user is logged in
            <>
            <a href='/movies'> <button className='button'>Dashboard</button></a> 
            <button className='button' onClick={handleLogout}>Logout</button>
            
            </>
            
            
          ) : (
            // Render login and signup links if the user is not logged in
            <>
              <Link to='/log'>Log in</Link>
              <button className='button'>
                <Link to='/reg'>Sign up</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;