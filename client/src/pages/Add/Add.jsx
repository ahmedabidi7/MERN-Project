
import React from "react";
import "./Add.scss";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Add = (props) => {
  const [user,setUser]=useState(props.user)

  const [name, setName] = useState(props.userName);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setCover_image] = useState("");

  const [description, setDesc] = useState("");
 
  const [price, setPrice] = useState("");

  const nav = useNavigate();
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = (e) => {
      e.preventDefault();
      const service = {
        name,
        title,
        category,
        image,
        description,
        price,

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
    
 
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        <div className="sections">
          <div className="info">
          <label>Your Name:</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} name="name" class="form-control" disabled/>
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              onChange={(e)=>setTitle(e.target.value)} value={title} name="title"
            />
            <label htmlFor="">Category</label>
            <select onChange={(e)=>setCategory(e.target.value)} value={category} name="category">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" onChange={(e)=>setCover_image(e.target.value)} value={image} name="image"/>

            <label htmlFor="">Description</label>
            <textarea  id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"
            onChange={(e)=>setDesc(e.target.value)} value={description} name="description" ></textarea>
            <label htmlFor="">Price</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} name="price"/>
            <button>Create</button>
          </div>
          
        </div>
        </form>
       </div>
       
    </div>
 
  );
};

export default Add;