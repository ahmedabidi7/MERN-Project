import React from 'react'
import Navbar from '../components/Navbar/Navbar';

function ErrorPage() {
  return (
    <div className="add1">
    <Navbar />
    <div className='d-flex justify-content-center mt-5'>
        <img src="https://http.cat/401.jpg" alt="401 unautorized" />
    </div>
    </div>
  )
}

export default ErrorPage