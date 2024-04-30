import { useState } from 'react'
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../Page/Home'
import About from '../Page/About'
import Contact from '../Page/Contact'
import PageNotFound from '../Page/PageNotFound'
import {BrowserRouter} from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
   </Routes>
  </Router>
  
    </>
  )
}

export default App
