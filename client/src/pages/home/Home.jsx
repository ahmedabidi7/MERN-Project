import React , { useState }from 'react'
import Header from '../../components/Header/Header'
import Apply from '../../components/Apply/Apply'
import Value from '../../components/Value/Value'
import Cons from '../../components/cons/Cons'

import Navbar from '../../components/Navbar/Navbar';



// import { Value } from 'sass'
const Home = (props) => {
  const [user,setUser]=useState(props.user)
  return (
    <div className='Home'>
    <div>
    <Navbar/>
     <Header/>
     <Cons/>
     <div className='white-gradientt'/>
    </div>
     <Apply/>
     <Value/>
     
    </div>
  )
}

export default Home