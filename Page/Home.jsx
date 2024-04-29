import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <Link to={'/about'}><button>Click go to About</button></Link> <br />
    <br />
    <Link to={'/contact'}><button>Click go to contact</button></Link>
    </>
  )
}

export default Home