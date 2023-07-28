import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Find = (props) => {
    const [Finds, setFinds] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/services")
        .then((serverResponse)=>{
            console.log("DATA================",serverResponse.data);
            setFinds(serverResponse.data.Services)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[])

console.log("STATE==========",Finds);
  // delete function
  const deleteFind = (id) =>{
    axios.delete("http://localhost:8000/api/services/"+id)
    .then((res)=>{
      
        setFinds(Finds.filter((oneFind)=>{
            return (oneFind._id !== id)
        }))
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err)
    })
}
  return (
    <div>
<h1>Service Crew</h1>     
<button><Link to='/service/new'>ADD Service</Link></button>

  {Finds.map((oneFind)=>{
      return(  <div className="card" key={oneFind._id} > <div className="card-body">
          <h1 >
              <Link to={`Service/${oneFind._id}`}>{oneFind.name}</Link>
          </h1>
          <img src={oneFind.image} alt="" />
          <button> <Link to ={`/Service/${oneFind._id}`}>View Service</Link></button>
          <button onClick={() => deleteFind(oneFind._id)}> walk the plank</button>
    </div> 
    </div> )})}  
    

  
   </div>
  )
}

export default Find