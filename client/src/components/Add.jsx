
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add(props) {
    const [title, setTitle] = useState("");
    const [name, setName] = useState(props.userName);
    const [rating, setRating] = useState("3");
    const [review, setReview] = useState("");

    const nav = useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        const reviews = {
            name,
            rating,
            review
        }
        const movie = {
            title,
            reviews:[reviews]
        }
        axios.post('http://localhost:8000/api/movie/new', movie ,{withCredentials: true})
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
        <h1>Submit a Movie and a Review:</h1>
        <label>Movie Title:</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control"/>
        <label>Your Name:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} class="form-control" disabled/>
        <label>Rating:</label>
        <select id="lang" onChange={(e)=>setRating(e.target.value)} value={rating} className="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
        </select> <br />
        <label>Your Review:</label>
        <textarea onChange={(e)=>setReview(e.target.value)} class="form-control">{review}</textarea>
        <br /><button  className='btn btn-success'>Submit</button>
    </form>
    <button onClick={(e)=>{nav("/movies")}}  className='btn btn-warning'>Cancel</button>
    </>
  )
}

export default Add