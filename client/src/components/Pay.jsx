import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

function Pay(props) {
    const { id } = useParams();
    const nav = useNavigate();

    const [name, setName] = useState(props.userName);
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

    const update = e => {
        e.preventDefault();
        const updatedService = {
            type:service.type,
            description:service.description,
            name:service.name,
            price:service.price,
            appointments:[...service.appointments,{name,date,link}]
        }
        axios.put('http://localhost:8000/api/service/update/' + id, updatedService ,{withCredentials: true})
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
    }
    
  return (
    <div>
        <form onSubmit={update}>
        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        <label>Your Name:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" disabled/>
        <label>Enter a date and time for your booking:</label>
        <input type="datetime-local" onChange={(e)=>setDate(e.target.value)} name="date" value={date} className="form-control" />

        <iframe src="http://localhost:8000/pay" width={1000} height={550}></iframe>
        <br /><button  className='btn btn-success'>Submit</button>
        </form>
    </div>
  )
}

export default Pay