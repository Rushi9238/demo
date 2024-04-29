import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {
    const naviagte=useNavigate()
  return (
    <>
    <div>Contact</div>
    {/* <Link to={'/'}> */}
    <button onClick={()=>naviagte('/')}>Click Go to Home</button>
    {/* </Link> */}
    <br />
    <br />

    {/* <Link to={'/about'}> */}
    <button onClick={()=>naviagte('/about')}>Click Go to About</button>
    {/* </Link> */}
    </>
  )
}

export default Contact