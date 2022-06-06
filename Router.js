import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signer from "../../PAGES/LogIn";
import Screen from "../../PAGES/Signup";
import  Home  from "../../PAGES/Home";

export default function Routing(){
    return <Router>
        <Routes>
            <Route path="/LogIn/" element={<Signer/>} />
            <Route path="/SignUp/" element={<Screen/>} />
            <Route path="/Home" element={<Home/>} />
        </Routes>
    </Router>

}