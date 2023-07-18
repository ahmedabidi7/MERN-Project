
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Main() {
    const [movies, setMovies] = useState([]);
    const nav = useNavigate();


    useEffect(()=>{
        axios.get('http://localhost:8000/api/movies',{withCredentials: true})
            .then(res=>{
                setMovies(res.data);
                console.log(res.data);
            })
            .catch((err) => {console.error(err);
                if (err.response.status === 401)
                {nav("/unautorized", {replace:true});}
            })
        
    },[]);

    const calculateReviewsAverage = (reviews) => {
        let average = reviews.reduce((acc,review) => {
            return acc + review.rating / reviews.length;
        },0);
        return average > 0 ? average.toFixed(1) : 0;
    }

    return (
        <div>
            <div className='d-flex justify-content-around m-2'>
            <h2>Movie List</h2>
            
            <button onClick={(e)=>{nav("/movies/new")}} className='btn btn-primary'>Add a new Movie</button>
            </div>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Avg. Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map( (movie, i) =>
                    <tr>
                        <td>{movie.title}</td>
                        <td>{calculateReviewsAverage(movie.reviews)}</td>
                        <td>
                            <button onClick={(e)=>{nav("/movies/"+movie._id)}} className='btn btn-success'>Read Reviews</button>
                            <button onClick={(e)=>{nav("/movies/"+movie._id+"/review")}} className='btn btn-warning'>Write a Review</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            
        </div>
  )
}

export default Main