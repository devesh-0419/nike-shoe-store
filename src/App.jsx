import React from 'react'
import HomePage from './components/HomePageContent/HomePage'
import Signup from './components/LoginContent/Signup'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

   <Route path='/' element={<HomePage/>} /> 
   <Route path='/signup' element={<Signup/>} /> 

    </Routes>
    </BrowserRouter>
  )
}

export default App