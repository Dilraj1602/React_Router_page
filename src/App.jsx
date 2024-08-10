import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Signup from "./Components/Signup";


function App() {
  return (
    <div className="bg-[rgb(0,8,20)] w-[100vw] h-[100vh] pt-4">
      
      <Navbar className=""></Navbar>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />


      </Routes>

    </div>
  );
}

export default App;
