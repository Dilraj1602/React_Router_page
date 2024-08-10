import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar({ islogin, setislogin }) {

    const navigate = useNavigate();

    function logouthandler() {
        setislogin(false);
        toast.success("Logout successful");
        navigate('/login');
    }

    return (
        <div className="text-white flex justify-between items-center w-[1160px] mx-auto">
            <NavLink to="/">
                <img src={logo} alt="logo" className="w-60 h-20" loading="lazy" />
            </NavLink>
            <div className="space-x-6">
                <NavLink to="/" className="text-xl">Home</NavLink>
                <NavLink to="/about" className="text-xl">About</NavLink>
                <NavLink to="/contact" className="text-xl">Contact</NavLink>
            </div>

            <div>
                {
                    islogin ? (
                        <div className="space-x-6">
                            <button
                                className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg"
                                onClick={logouthandler}
                            >
                                Log Out
                            </button>
                            <NavLink to="/dashboard">
                                <button className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg">Dashboard</button>
                            </NavLink>

                        </div>
                    ) : (
                        <div className="space-x-6">
                            <NavLink to="/login">
                                <button className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg">Log in</button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className="bg-[rgb(22,29,41)] px-[12px] py-[8px] rounded-md opacity-70 text-lg">Sign up</button>
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;
