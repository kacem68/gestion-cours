import React, { Component } from "react";
import "./App.css";
import RouterComponent from './Router';


class App extends Component {
    render() {
        return (
            < div className="container" >
          <RouterComponent></RouterComponent>       
            </div>
        );
    }
}

export default App;