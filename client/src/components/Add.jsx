
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add(props) {
    const [type, setType] = useState("3");
    const [name, setName] = useState(props.userName);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const nav = useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        const service = {
            type,
            name,
            description,
            price
        }
        axios.post('http://localhost:8000/api/service/new', service ,{withCredentials: true})
            .then(res=>{console.log(res);nav("/movies")})
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
    <>
    <form onSubmit={onSubmitHandler} className="form-group">
        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        <h1>Add a new Service:</h1>
        <label>Your Name:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} class="form-control" disabled/>
        <label>Type:</label>
        <select id="lang" onChange={(e)=>setType(e.target.value)} value={type} className="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
        </select> <br />
        <label>Description:</label>
        <textarea onChange={(e)=>setDescription(e.target.value)} class="form-control">{description}</textarea>
        <label>Price:</label>
        <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control"/>
        <br /><button  className='btn btn-success'>Submit</button>
    </form>
    <button onClick={(e)=>{nav("/movies")}}  className='btn btn-warning'>Cancel</button>
    </>
  )
}

export default Add