import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import PlayerCard from "./Components/PlayerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.table("This is res.data", res.data);
      })
  }

  render(){
    return (
      <div className="App">
        <h1>These are the Players</h1>
      </div>
    );
  }  
}

export default App;
