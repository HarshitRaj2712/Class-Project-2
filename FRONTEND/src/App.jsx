
import React, { useContext } from "react";
import { ThemeContext } from "./context/useTheme";
import {Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Feature from './pages/Feature'
import Login from './pages/Login'
import Signup from './pages/Signup'
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "Dark" : "light"}>
      {/* <h1>hello</h1> */}
        <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/feature" element={<Feature/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>

  )
}

export default App