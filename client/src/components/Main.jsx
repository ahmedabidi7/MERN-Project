import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Main(props) {
    const [services, setServices] = useState([]);
    const nav = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/services/'+props.name ,{withCredentials: true})
            .then(res => {
                setServices(res.data);
                console.log(res.data);
            })
            .catch((err) => {console.error(err);
                if (err.response.status === 401)
                {nav("/unautorized", {replace:true});}
            })
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-around m-2'>
            <h2>Services list</h2>
            
            <button onClick={(e)=>{nav("/movies/new")}} className='btn btn-primary'>Add a new service</button>
            </div>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Service Type</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Appointments</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map( (service, i) =>
                    <tr>
                        <td>{service.type}</td>
                        <td>{service.description}</td>
                        <td>{service.price}</td>
                        <td>
                        <table className='table'>
                            {service.appointments.map( (appointment,i)=>
                            <tr>
                                <td>Date: {appointment.date}</td><td>Client Name: {appointment.name}</td><td><button onClick={()=>window.open(`https://localhost:3003/r/${appointment.link}`)} className='btn btn-warning'>Start Video Call</button></td>
                            </tr>
                            )}
                            </table>
                            {/* <button onClick={(e)=>{nav("/movies/"+service._id+"/review")}} className='btn btn-warning'>Write a Review</button> */}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
  )
}

export default Main