import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

const View = (props) => {
    const [movie, setMovie] = useState({})
    const [reviews, setReviews] = useState([])
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/movie/' +id ,{withCredentials: true})
            .then(res => {setMovie(res.data);setReviews(res.data.reviews)})
            .catch(err => console.error(err));
    }, []);

    const deleteObj = (Id) => {
        axios.delete('http://localhost:8000/api/movie/delete/' + Id ,{withCredentials: true})
            .then(res => {
                nav("/movies")
            })
            .catch(err => console.error(err));
    }
    
    const deleteRev = e => {
        e.preventDefault();
        const updatedMovie = {
            name:movie.name,
            reviews:reviews.filter()
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
        <div>
            <h1>Reviews for {movie.title}</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Reviewer</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map( (review, i) =>
                    <tr>
                        <td>{review.name} {(props.userName===review.name) ? <button>delete</button> :"" } </td>
                        <td>{review.rating}</td>
                        <td>{review.review}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <button onClick={(e)=>{deleteObj(movie._id)}} className='btn btn-danger'>Delete</button>
            <button onClick={(e)=>{nav("/movies")}}  className='btn btn-warning'>Cancel</button>
        </div>
    )
}

export default View