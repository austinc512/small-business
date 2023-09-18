import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";

const Navigation = (props) => {
  const navigate = useNavigate();
  // console.log(props);
  return (
    <AppBar position="relative" style={{ backgroundColor: "#00b36b" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          <Link to="/">Austin Small Business</Link>
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          {document.cookie.includes("loggedIn=true") ? (
            <Link to="/add">Add</Link>
          ) : null}
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              props.logOutUser();
              navigate("/login");
            }}
          >
            {/* this shows along the navbar */}
            {document.cookie === "" ? "Login" : "LOGOUT"}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

/*
need conditional rendering for this
if not logged in, need Listings and Login
  that's Listings, Biz Details, and Sign-In
if logged in,  need Listings, Add, and LOGOUT
  that's Admion View and Add New Listing

const target = "loggedIn=true";

const check = "asd;flkajsdpgioquhreglq;wighjloggedIn=trueqebhwg;dkhjqwel;hiouj";
console.log(check.includes(target)); // true

can use something like this to conditionally render <li> elements
  */
