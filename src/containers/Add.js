import { connect } from "react-redux";
// import the visual React component "Home"
import Add from "../components/Add";
import { createListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createListing: (user) => dispatch(createListing(user)),
  };
};

// state.cars is what exists in our state.js file
// now cars available to our "dumb" component, <Home /> as props.cars

// wrap the visual React Component "Home" with the Redux Container Component Home
// note currying syntax - also called partial application
export default connect(mapStateToProps, mapDispatchToProps)(Add);
