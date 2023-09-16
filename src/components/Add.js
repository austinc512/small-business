import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";

const Add = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    address: "",
    description: "",
    hours: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    // console.log(state.username);
    // console.log(state);
    props.logInUser(state.username);
    console.log(`login form submitted`);
    e.preventDefault();
    // set cookie here
    // this maxAge configuration is in seconds, not ms
    document.cookie = cookie.serialize("loggedIn", true, {
      maxAge: 60 * 60,
    });

    navigate("/");
  };
  console.log(`Add component props`);
  console.log(props);
  return (
    <div>
      {props.username && (
        <div className="top-level-user">Logged in as: {props.username}</div>
      )}

      <div className="l-r-container">
        <div className="add-left">
          <Container>
            <form className="login-form" onSubmit={handleSubmit}>
              <TextField
                required
                variant="standard"
                onChange={handleTextChange}
                value={state.name}
                name="name"
                label="Name"
                type="text"
              />
              <TextField
                required
                variant="standard"
                onChange={handleTextChange}
                value={state.address}
                name="address"
                label="Address"
                type="text"
              />
              <TextField
                required
                variant="standard"
                onChange={handleTextChange}
                value={state.hours}
                name="hours"
                label="Hours (Ex. 8AM-9PM)"
                type="text"
              />
              <TextField
                required
                variant="standard"
                onChange={handleTextChange}
                value={state.description}
                name="description"
                label="Description"
                type="text"
              />

              <Button
                type="submit"
                className="login-button"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </form>
          </Container>
        </div>
        <div className="add-right">
          <h2>Add map here plz</h2>
        </div>
      </div>
    </div>
  );
};

export default Add;
