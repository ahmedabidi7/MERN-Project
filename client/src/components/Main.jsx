import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import "./Main.scss"

import Footer from '../components/Footer/Footer';

function Main(props) {
  const [services, setServices] = useState([]);
  const nav = useNavigate();
  const [user,setUser]=useState()

  // delete function
  const deleteFind = (id) => {
    axios.delete("http://localhost:8000/api/service/delete/" + id)
      .then((res) => {
        setServices(services.filter((oneFind) => {
          return (oneFind._id !== id)
        }))
      })
      .catch((err) => {
        console.log("Something Went Wrong", err)
      })
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/getuser',{withCredentials: true } )
      .then((response) => {
          console.log(response);
          setUser(response.data.firstName)
          console.log(user)

      })
      .catch((err) => {
          console.log(err);
      });
    

  }, []);

  useEffect(() => {

    axios.get('http://localhost:8000/api/services/' + user, { withCredentials: true })
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

  }, [user]);

  return (
    <div className='div1'>
    <div className='di1'>
    <div className='ser1'>
   
        <button onClick={(e)=>{nav("/movies/new")}} className='btn btn-primary'>Add a new service</button>
        </div>
        
   
        
        
    </div>
    <div className="orders">
    
        <div className="container">
        
        <div className='cont'>
        <div>
        <h3 className='h33'>Your Services</h3><br/>
        <table className='tab1'>
        
        <thead>
          <tr>
            {/* <th>Image</th> */}
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {services.map((service, i) => (
            <tr key={service._id}>
              {/* <td>
                <img className="message" src={service.image} alt="" />
              </td> */}
              <td>{service.title}</td>
              <td>{service.price} DT</td>
              <td>
              <button>
              <Link to={`/Show/${service._id}`} >
                  View
                </Link>
                </button>
                </td>
                <td>
                <button onClick={() => deleteFind(service._id)}>Delete</button>
              </td>
            </tr>
            
          ))}
          </tbody>
        </table>
        </div>
        <div>
        <h3>Your Appintments</h3><br/>
        <table className='tab2'>
        
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Video Call</th>

          </tr>
          </thead>
          <tbody>
          {services.map((service, i) => (
          service.appointments.map( (appointment,i)=>(
            <tr key={services._id}>
            
            <td>{appointment.name}</td>
            <td>{service.title}</td>
            <td>{appointment.date}</td>

            <td>{service.price} DT</td>

            <td>
            <button onClick={()=>window.open(`https://localhost:3003/r/${appointment.link}`)} className='btn btn-warning'>Start Video Call</button></td>
            </tr>
            
          ))))}
          </tbody>
        </table>
        </div>
        </div>
      </div>
      
    

    </div>
    
    </div>
    
  );
}

export default Main
