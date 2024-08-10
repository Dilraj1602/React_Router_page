import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import logo from "./Images/Logo.svg";
import Section from "./Section";
import Logout from "./Logout"; 
import Dashboard from "./Dashboard"; 

function Navbar() {
    const [login, setLogin] = useState(false);

    return (
        <div className="text-white flex justify-between  items-center w-[1160px] mx-auto">
            <NavLink to="/">
            <img src={logo} alt="logo" className="w-60 h-20 " loading="lazy" />
            </NavLink>
            <div className="space-x-6">
                <NavLink to="/" className="text-xl">Home</NavLink>
                <NavLink to="/about" className="text-xl">About</NavLink>
                <NavLink to="/contact" className="text-xl">Contact</NavLink>
            </div>


            <div>
                {
                     login ?(
                        <div className="space-x-6">
                            <NavLink to="/dashboard">
                            <button className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg">Log Out</button>
                            </NavLink>
                            <NavLink to="/logout">
                            <button className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg">Dashboard</button>
                            </NavLink>
                            </div>
                            ):(
                                <div className="space-x-6">
                                    <NavLink to="/login">
                                    <button className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg">Log in</button>
                                    </NavLink>
                                    <NavLink to="/signup">
                                    <button  className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg"
                                    >Sign up</button>
                                    </NavLink>
                            </div>)
                }
            </div>
        </div>
    );
}

export default Navbar;
