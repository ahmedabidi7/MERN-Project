
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

function Update(props) {
    const { id } = useParams();
    const nav = useNavigate();
    
    const [movie, setMovie] = useState("");
    const [title, setTitle] = useState("");
    const [name, setName] = useState(props.userName);
    const [rating, setRating] = useState("3");
    const [review, setReview] = useState("");

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/service/' + id ,{withCredentials: true})
            .then(res => {
                setTitle(res.data.title);
                setMovie(res.data);
            })
    }, [id]);

    const update = e => {
        e.preventDefault();
        const updatedMovie = {
            name,
            reviews:[...movie.reviews,{name,rating,review}]
        }
        axios.put('http://localhost:8000/api/movie/update/' + id, updatedMovie ,{withCredentials: true})
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
    <>
    <form onSubmit={update}>
        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        <h1>Add a Review for {title} :</h1>
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

export default Update