import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../Page/Home'
import About from '../Page/About'
import Contact from '../Page/Contact'
import PageNotFound from '../Page/PageNotFound'
function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
   </Routes>
    </>
  )
}

export default App
