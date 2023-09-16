export const logInUser = (username) => {
  return {
    type: "LOG_IN_USER",
    value: username,
  };
};

export const logOutUser = () => {
  return {
    type: "LOG_OUT_USER",
    value: "",
  };
};

export const deleteListing = (index) => {
  return {
    type: "DELETE_LISTING",
    value: index,
  };
};
