import {React, useContext} from 'react'
import {Link} from 'react-router-dom';
import { ThemeContext } from "../context/useTheme";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
   const toggleTheme = () => {
    
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className='flex flex-row justify-center items-center gap-5 
    h-20 font-bold text-lg'>
        {/* <h1>Hello</h1> */}
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/feature'>Courses</Link>
        <Link to='/dashboard'>DashBoard</Link>
        <button onClick={toggleTheme}
        className="bg-white text-black px-3 py-1 rounded">
        {theme}</button>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>SignUP</Link>

    </div>
  )
}

export default Navbar