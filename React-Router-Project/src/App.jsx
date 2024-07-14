import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Contacts } from './Components/Pages/Contacts'
import { Navbar } from './Components/Layout/Navbar'
import { About } from './Components/Pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/About' element={<About /> } />
        <Route path='/Contacts' element={<Contacts /> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
