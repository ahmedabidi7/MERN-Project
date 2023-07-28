import React, { useState } from 'react'
import axios from 'axios'
import "./Login.scss";
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const Log = (props) => {
    const [user,setUser]=useState(props.user)
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        register: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        login: {
            email: '',
            password: ''
        }

    })

    // handel onChange for login inputs
    const handleLoginChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }


    // handel onSubmit for login inputs
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', login,{withCredentials: true})
            .then(res => {
                console.log("cookie", document.cookie)
                console.log("user name : ", res.data.userFromDB.firstName)
                props.setUserName(res.data.userFromDB.firstName)
                props.setUser(res.data.userFromDB)
                navigate('/movies')

            })
            .catch(err => {
                console.log("Error : ", err.response.data)
                setErrors({
                    ...errors,
                    login: err.response.data

                })
                console.log("Error : ", errors.login)
            }
            )
    }

return (
    <div className='add1'>
    <Navbar/>
    <div className="login">
    
      <form onSubmit={handleLoginSubmit}>
        <h1>Log in</h1>
        {errors.login ? <p style={{ color: "red" }}>{errors.login.error}</p> : null}

        <label htmlFor="">Email</label>
        <input className="form-control" type='email' name='email' value={login.email} onChange={handleLoginChange}/>

        <label htmlFor="">Password</label>
        <input className="form-control" type='password' name='password' value={login.password} onChange={handleLoginChange} />
        <button type="submit">Login</button>

      </form>
      </div>
      </div>

      
  );
}

export default Log