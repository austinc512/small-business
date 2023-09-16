import { combineReducers } from "redux";

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];

    case "DELETE_LISTING":
      let newState = [...state];
      newState.splice(action.value, 1);
      return newState;

    default:
      return state;
  }
};

const username = (state = "", action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return action.value;

    case "LOG_OUT_USER":
      return "";

    default:
      return state;
  }
};

export default combineReducers({ businesses, username });
