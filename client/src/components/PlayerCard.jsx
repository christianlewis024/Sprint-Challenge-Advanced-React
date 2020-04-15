import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="playerCard">
      <h2>Name: {player.name}</h2>
      <p>Country: {player.country}</p>
      <p>Searches: {player.searches}</p>
    </div>
  );
}

export default PlayerCard;
