import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import "./Main_client.scss"


function Main_client(props) {

    const [services, setServices] = useState([]);
    const nav = useNavigate();
    const [user,setUser]=useState()

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
        <div className='div1'>
    
        <div className='di1'>
        <div className='ser1'>
        
                <button onClick={(e)=>{nav("/services")}} className='btn btn-primary'>Search for Services</button>
                </div>
                </div>
                <h3>Your Appointments:</h3>
        <div className='hi'>
        
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Law Consultant </th>
                            <th>Service </th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Link to Video Call</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map( (service, i) =>
                        service.appointments.map( (appointment,i)=>
                        (appointment.name===user) ? 
                            <tr>
                            <td>{service.name}</td>
                            <td>{service.category}</td>
                            <td>{service.price} DT</td>
    
                                <td><input type="datetime-local"  name="date" value={appointment.date} disabled/></td>
                                <td><button onClick={()=>window.open(`https://localhost:3003/r/${appointment.link}`)} className='btn btn-warning'>Start Video Call</button></td>
                            </tr>
                            : <></>
                            )
                        )}
                    </tbody>
                </table>
            
            </div>
            </div>
    
      )
}

export default Main_client