import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Main_client() {

    const [services, setServices] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/services',{withCredentials: true})
            .then(res=>{
                setServices(res.data);
                console.log(res.data);
            })
            .catch((err) => {console.error(err);
                if (err.response.status === 401)
                {nav("/unautorized", {replace:true});}
            })
    },[]);

  return (
    <div>
            <div className='d-flex justify-content-around m-2'>
            <h2>Services list</h2>
            
            <div></div>
            </div>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Lawyer Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map( (service, i) =>
                    <tr>
                        <td>{service.name}</td>
                        <td>{service.description}</td>
                        <td>{service.price}</td>
                        <td>
                            <button onClick={(e)=>{nav("/pay/"+service._id)}} className='btn btn-success'>Add Appointment</button>
                            {/* <button onClick={(e)=>{nav("/movies/"+service._id+"/review")}} className='btn btn-warning'>Write a Review</button> */}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            <div className='d-flex justify-content-around m-2'>
            <h2>My Appointements:</h2>
            
            <div></div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Link to Video Call</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map( (service, i) =>
                    service.appointments.map( (appointment,i)=>
                        <tr>
                            <td>{appointment.date}</td><td><button onClick={()=>window.open(`https://localhost:3003/r/${appointment.link}`)} className='btn btn-warning'>Start Video Call</button></td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
  )
}

export default Main_client