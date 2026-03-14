import { useState } from "react";
import "../Navbar/Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar(){

const [menuOpen,setMenuOpen] = useState(false)

return(

<nav className="navbar">

<h2 className="logo">Portfolio</h2>

<div
className="hamburger"
onClick={()=>setMenuOpen(!menuOpen)}
>

<span></span>
<span></span>
<span></span>

</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#contact">Contact</a></li>

</ul>

<ThemeToggle/>

</nav>

);

}

export default Navbar;