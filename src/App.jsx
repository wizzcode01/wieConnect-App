import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Home from "./Pages/Home";

function App() {

  return (
    <>
    <Router>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/registration" element={<Registration/>}/> 
      </Routes>
    </Router>
    </>
  )
}

export default App
