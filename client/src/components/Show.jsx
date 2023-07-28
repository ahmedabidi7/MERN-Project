import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams,useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { Container, Card, ListGroup } from 'react-bootstrap';
import "./Pay.scss"

function Show(props) {
    const { id } = useParams();
    const nav = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user,setUser]=useState("")

    const [name, setName] = useState(user);
    const [date, setDate] = useState("");
    const [service, setService] = useState("");
    const [link, setLink] = useState(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000);

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/service/' + id ,{withCredentials: true})
            .then(res => {
                setService(res.data);
            })
    }, [id]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/getuser',{withCredentials: true } )
          .then((response) => {
              console.log(response);
              setUser(response.data.firstName)
              setName(response.data.firstName)
              console.log(user)
    
          })
          .catch((err) => {
              console.log(err);
          });
        
    
      }, []);

 
    
    const onToken = async (e) => {
        console.log(e);
        // e.preventDefault();
        const updatedService = {
            category:service.category,
            description:service.description,
            title:service.title,
            price:service.price,
            appointments:[...service.appointments,{name,date,link}]
        }
    
        try {
          setLoading(true);
          await axios.put('http://localhost:8000/api/service/update/' + id, updatedService ,{withCredentials: true})
          .then(res => {console.log(res);nav("/movies")})
          .catch(err=>{
              const errorResponse = err.response.data.errors; // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)
              }
              // Set Errors
              setErrors(errorArr);
          })
          setLoading(false);
          Swal.fire(
            "Congratulations",
            "Your Appointment Booked Successfully",
            "success"
          ).then(() => {
            window.location.href = "/movies";
          });
        } catch (error) {
          
          console.log(error);
          Swal.fire("Opps", "Error:" + error, "error");
        }
        setLoading(false);
      };



  return (
    <div className='add1'>
        
    <Navbar/>
    
    <div className="orders" >
    
        <div className="d-flex ">
        
        
        
        <div className="co1">
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        {service.title}
      </h1>
      <div className="card77" style={{ justifyContent: 'space-between', fontSize: '16px' }}>
        <div className="left-side">
          <p><strong>Consultant:</strong> {service.name}</p>
          <p><strong>Category:</strong> {service.category}</p>
          <p><strong>Price:</strong> {service.price} DT</p>
        </div>
        <div className="right-side">
          <p><strong>Description:</strong></p>
          <p>{service.description}</p>
        </div>
      </div>
    
      

        
      </div>
      
        
      </div>
      
    

    </div>


    
    
    </div>
    
  )
}

export default Show