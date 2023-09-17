import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

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
    e.preventDefault();
    console.log(`Add listing form submitted`);
    console.log(state);

    let newId = 0;
    console.log(props.businesses);
    for (let item of props.businesses) {
      console.log("item", item);
      if (item.id > newId) {
        console.log(`item.id > newId block`);
        newId = item.id;
      }
    }
    newId++;
    let newListing = {};
    newListing["id"] = newId;
    for (let item of Object.entries(state)) {
      console.log(item);
      // transfer properties of object
      newListing[item[0]] = item[1];
    }
    console.log(newListing);
    props.createListing(newListing);
    // navigate to root page
    navigate("/");
  };

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
                className="add-inputs"
                onChange={handleTextChange}
                value={state.name}
                name="name"
                label="Name"
                type="text"
              />
              <TextField
                required
                variant="standard"
                className="add-inputs"
                onChange={handleTextChange}
                value={state.address}
                name="address"
                label="Address"
                type="text"
              />
              <TextField
                required
                variant="standard"
                className="add-inputs"
                onChange={handleTextChange}
                value={state.hours}
                name="hours"
                label="Hours (Ex. 8AM-9PM)"
                type="text"
              />
              <TextField
                required
                multiline
                variant="standard"
                className="add-inputs"
                onChange={handleTextChange}
                value={state.description}
                name="description"
                label="Description"
                type="text"
              />

              <Button
                type="submit"
                className="add-button"
                variant="contained"
                color="secondary"
              >
                SAVE
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
