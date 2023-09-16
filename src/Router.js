import React from "react";
import { Routes, Route } from "react-router";
import Listings from "./containers/Listings";
import Details from "./containers/Details";
import Login from "./containers/Login";
import Navigation from "./containers/Navigation";

// as you develop, import from containers instead of components
// containers is how you interact with global state

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<About />} />
      <Route path="/car/:id" element={<Car />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
};

export default Router;
