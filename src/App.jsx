import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './qtify-com/HomePage'

const App = () => {
  return (
    <div className=''>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App