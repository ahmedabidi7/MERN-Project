import React from 'react'
import { useParams,useNavigate } from "react-router-dom";

function Video(props) {
    const { link } = useParams();
    const src = "https://localhost:3003/r/"+link
  return (
    <div>
        <iframe src={src} width={1000} height={550}></iframe>
    </div>
  )
}

export default Video