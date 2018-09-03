import React, { Component } from "react";
import Contacts from "./contacts/ContactState";
import Header from "./layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "../context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <Contacts />
          </div>
          <span className="footer"> made with love by prakash </span>
        </div>
      </Provider>
    );
  }
}

export default App;
