import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div>AboutPage</div>
    <Link to={'/'}><button>Click Go to Home</button></Link>
    <br />
    <br />

   <Link to={'/contact'}> <button>Click Go to Contact</button></Link>
    </>
  )
}

export default About