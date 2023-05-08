import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import SignIn from './Pages/SignIn/signin'
import Clue1 from './Pages/Clue1/Clue1'
import Clue2 from './Pages/Clue2/Clue2'
import Clue3 from './Pages/Clue3/Clue3'
import Clue4 from './Pages/Clue4/Clue4'
import Clue5 from './Pages/Clue5/Clue5'
import Complete from './Pages/Complete/Complete'
import DeadEnd1 from './Pages/DeadEnd1/DeadEnd1'
import DeadEnd2 from './Pages/DeadEnd2/DeadEnd2'
import Admin from './Pages/Admin/Admin'
import Dashboard from './Pages/Dashboard/Dashboard'
const App = () =>{
  return (
    <Router>
      <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/clue1" element={<Clue1/>}/>
          <Route path="/clue2" element={<Clue2/>}/>
          <Route path="/clue3" element={<Clue3/>}/>
          <Route path="/clue4" element={<Clue4/>}/>
          <Route path="/clue5" element={<Clue5/>}/>
          <Route path="/complete" element={<Complete/>}/>
          <Route path="/deadend1" element={<DeadEnd1/>}/>
          <Route path="/deadend2" element={<DeadEnd2/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Admin/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App;
