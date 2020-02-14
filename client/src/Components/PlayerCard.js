import React from "react";

const PlayerCard = (props) => {
    console.log(props);

    return(
        <div className="card-container">
            <h1 className = "card-name">{props.player.name}</h1>
            <h2 className = "card-country">{props.player.country}</h2>
            <h4 className = "card-searches">{props.player.searches}</h4>
        </div>
    )
};

export default PlayerCard;