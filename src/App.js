import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routing from "./Route/Routing";

import React, { Component } from 'react'
import AllAriticle from "./CRUD/AllAriticle";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing> </Routing>
      </div>
    )
  }
}