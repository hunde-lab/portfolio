import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import "../ThemeToggle/ThemeToggle.css";


function ThemeToggle(){

const [dark,setDark] = useState(()=>{

const saved = localStorage.getItem("darkMode");
return saved !== null ? JSON.parse(saved) : true;

});

useEffect(()=>{

if(dark){
document.body.classList.add("dark");
document.body.classList.remove("light");
}else{
document.body.classList.add("light");
document.body.classList.remove("dark");
}

localStorage.setItem("darkMode",JSON.stringify(dark));

},[dark])

return(

<motion.button
className="theme-btn"
onClick={() => setDark(!dark)}
whileTap={{ rotate: 180 }}
transition={{ duration: 0.4 }}
>

{dark ? <FaSun/> : <FaMoon/>}

</motion.button>

);

}

export default ThemeToggle;