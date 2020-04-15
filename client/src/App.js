import React from "react";
import PlayerList from "./components/PlayerList";
import Header from "./components/Header";

import "./App.css";

class App extends React.Component {
  state = {
    statePlayers: [],
  };

  componentDidMount() {
    if (!localStorage.getItem("players")) {
      fetch("http://localhost:5000/api/players")
        .then((res) => res.json())
        .then((data) => {
          this.setState({ statePlayers: data });
        });
    }
  }

  putLocalStorageInState = (playerData) => {
    this.setState({ statePlayers: playerData });
  };

  render() {
    return (
      <>
        <Header />
        <div className="boxes">
          <PlayerList
            players={this.state.statePlayers}
            putLocalStorageInState={this.putLocalStorageInState}
          />
        </div>
      </>
    );
  }
}

export default App;
