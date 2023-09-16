import React from "react";
import { Routes, Route } from "react-router";
import Listings from "./containers/Listings";
import Details from "./containers/Details";
import Login from "./containers/Login";
import Navigation from "./containers/Navigation";
import Add from "./containers/Add";

// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import cookie from "cookie";

// as you develop, import from containers instead of components
// containers is how you interact with global state

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  // so the logic of checking the cookie would occur here.
  // with JWT,
  return cookies["loggedIn"] ? true : false;
  //   return true;
};

// Write ProtectedRoute function here

const ProtectedRoute = (props) => {
  //   console.log(props);
  const { component: Component, ...rest } = props;

  // rest pattern isn't doing anything here, but I don't feel like deleting it.
  // perhaps I'll need this later on for some reason

  return checkAuth() === true ? <Component {...rest} /> : <Link to="/login" />;
};

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<ProtectedRoute component={Add} />} />
        {/* <Route path="/about" element={<About />} />
      <Route path="/car/:id" element={<Car />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
};

export default Router;
