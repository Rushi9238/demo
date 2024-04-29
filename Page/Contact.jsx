import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div>Contact</div>
    <Link to={'/'}>
    <button>Click Go to Home</button>
    </Link>
    <br />
    <br />

    <Link to={'/about'}>
    <button>Click Go to About</button>
    </Link>
    </>
  )
}

export default Contact