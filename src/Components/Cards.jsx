import React, { Component } from "react";
import "../App.css";

// This function returns the card with styling and <Result/> values
const FlipCard = () => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" />
                <div className="flip-card-back">
                    <Result />
                </div>
            </div>
        </div>
    );
};

// This function sets a random result to each card
function Result() {
        // Array of random outcomes. 
        var randomArr = ["You Win", "You Lose", "You Lose"]; 
        // The index of the possible outcome is randomly selected from "randomArr"
        var randomSelect = Math.floor(Math.random() * randomArr.length); 
    return randomArr[randomSelect];
}

// Setting a state so that it can be updated when the button is clicked. This causes the component to be re-rendered.
class Cards extends Component {
    state = {
        winnerCard: {}
    };

  // Rendering the three cards below
  render() {
    return (
        <div>
            <h1>Select a Card!</h1>
            <FlipCard />
            <FlipCard />
            <FlipCard />
        </div>
    );
  }
}

export default Cards;
