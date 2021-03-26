
import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ul class="navbar">
            
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/news"><li>News</li></NavLink>
                <NavLink to="/dish"><li>Dishes</li></NavLink>
           
                 
        </ul>

    )
}

export default Navbar;



