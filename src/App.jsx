import React from 'react'
import HomePage from './components/HomePageContent/HomePage'
import Login from './components/LoginContent/Login'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

   <Route path='/' element={<HomePage/>} /> 
   <Route path='/login' element={<Login/>} /> 

    </Routes>
    </BrowserRouter>
  )
}

export default App