
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'

import Birthday from './pages/cake/birthday'
import Journey from './pages/journey/journey'
import Message from './pages/message/message'

function App() {
 
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cake' element={<Birthday/>}></Route>
      <Route path='/journey' element={<Journey/>}></Route>
       <Route path='/message' element={<Message/>}></Route>
    </Routes>
  )
}

export default App
