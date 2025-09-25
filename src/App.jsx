import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Home from "./pages/Home";

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
