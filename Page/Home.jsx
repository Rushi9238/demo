import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const naviagte=useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=>naviagte('/about')}>Click go to About</button> <br />
    <br />
    <button onClick={()=>naviagte('/contact')}>Click go to contact</button>
    </>
  )
}

export default Home