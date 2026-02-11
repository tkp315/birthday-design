
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'

import Birthday from './pages/cake/birthday'
import Journey from './pages/journey/journey'
import Message from './pages/message/message'
import PromiseMessage from './pages/promise/promise-message'
import LastPage from './pages/end/page'

function App() {
 
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cake' element={<Birthday/>}></Route>
      <Route path='/journey' element={<Journey/>}></Route>
       <Route path='/message' element={<Message/>}></Route>
       <Route path='/promise-message' element={<PromiseMessage/>}></Route>
       <Route path='/last-page' element={<LastPage/>}></Route>


    </Routes>
  )
}

export default App
