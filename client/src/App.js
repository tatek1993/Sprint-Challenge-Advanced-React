import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import PlayerCard from "./Components/PlayerCard";
import Nav from "./Components/Nav";

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
        this.setState({players: res.data})
      })
      .catch()
  }

  render(){
    return (
      <div className="App">
        <Nav />
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player}/>
        ))}
      </div>
    );
  }  
}

export default App;
