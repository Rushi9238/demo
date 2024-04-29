import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
    const naviagte=useNavigate()
  return (
    <>
    <div>AboutPage</div>
    <button onClick={()=>naviagte('/')}>Click Go to Home</button>
    <br />
    <br />

    <button onClick={()=>naviagte('/contact')}>Click Go to Contact</button>
    </>
  )
}

export default About