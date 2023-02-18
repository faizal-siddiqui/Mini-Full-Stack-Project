import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../Pages/About";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
