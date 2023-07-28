import React,{useState,useEffect}from 'react'
import axios, { Axios } from 'axios'
import {Link , useNavigate } from 'react-router-dom'
import Main from './Main'
import Main_client from "./Main_client"
import "./Navbar/Navbar.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Add from './Add'



const Ho = (props) => {
    const [user,setUser]=useState(props.user)
    const navigate = useNavigate()
    const [userRole,setUserRole]=useState("")
    
    useEffect(()=>{
      axios.get('http://localhost:8000/api/getuser',{withCredentials: true }    )
      .then((response) => {
          console.log(response);
          setUserRole(response.data.role)
          console.log(userRole)
      })
      .catch((err) => {
          console.log(err);
      });
  },[]);

  return (
    <div> 
 
    <div className="add1">
    
    <Navbar/>
        
        {(userRole==="lawyer") ? <Main name={props.userName}/> :<Main_client name={props.userName}/> }
        
    </div>
    </div>

    
  )
}

export default Ho