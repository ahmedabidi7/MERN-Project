import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Login.scss";
import Navbar from '../components/Navbar/Navbar';

const Reg = (props) => {
    const [user,setUser]=useState(props.user)
    const navigate = useNavigate()
    const [register, setRegister] = useState({
        firstName: '',
       
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    })

    const [errors, setErrors] = useState({
        register: {
            firstName: '',
           
            email: '',
            password: '',
            confirmPassword: ''
        },
        login: {
            email: '',
            password: ''
        }

    })
    // handel onChange for register inputs
    const handleRegisterChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    // handel onSubmit for register inputs
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', register,{withCredentials: true})
            .then(res => {
                console.log(res)
                setRegister({
                    firstName: '',
                   
                    email: '',
                    password: '',
                    confirmPassword: '',
                    role: ''
                })
                props.setUserName(res.data.user.firstName)
                props.setUser(res.data.user)
                navigate('/movies')
            })
            .catch(err => {
                console.log("Error : ", err.response.data)
                setErrors({
                    ...errors,
                    register: err.response.data
                })
            })
    }



    return (
        <div className='add1'>
        <Navbar/>
       
    <div className="login">
      
       
        {errors.register ? Object.entries(errors.register).map(([key, value], index) => value ? <p style={{ color: "red" }}>{value.message}</p> : null) : null}
        <form onSubmit={handleRegisterSubmit} className="col-12" >
        <h1>Create a new account</h1>
                            <div >
                                <label className="form-label"   >Full Name</label><br />
                                <input className="form-control" type='text' name='firstName' value={register.firstName} onChange={handleRegisterChange} />

                            </div>
                           
                            <div >
                                <label className="form-label"      >Email</label><br />
                                <input className="form-control" type='email' name='email' value={register.email} onChange={handleRegisterChange} />
                            </div>
                            <div >
                                <label className="form-label"       >Password</label><br />
                                <input className="form-control" type='password' name='password' value={register.password} onChange={handleRegisterChange} />
                            </div>
                            <div >
                                <label className="form-label"     >Confirm Password</label><br />
                                <input className="form-control" type='password' name='confirmPassword' value={register.confirmPassword} onChange={handleRegisterChange} />
                            </div>
                            <div >
                            <label className="sel">Role</label><br />
                                <select id="sell" onChange={handleRegisterChange} value={register.role} className="form-control" name='role'>
                                    <option value="client">Client</option>
                                    <option value="lawyer">Law Consultant</option>
                                </select> <br />
                            </div>
                            <button type='submit' className='button'>Register</button>
                        </form>
  </div>
  </div>
 
    )
}

export default Reg