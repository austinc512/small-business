import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        {/* {document.cookie.includes("loggedIn=true") && <h1>Hello world</h1>} */}
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
