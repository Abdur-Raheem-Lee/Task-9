import React from "react";

// The functions below converts the inputted Dollars amount to Rands, Euros and
function ConvertRands(props) {
  return parseFloat(props.input * 15.25);
}

function ConvertEuros(props) {
  return parseFloat(props.input * 0.89);
}

function ConvertPounds(props) {
  return parseFloat(props.input * 0.81);
}

// The below component class uses "dollars" as the state, which is initialized with an empty string, the "handleChange" is binded to it so that it can be used in the render method.
class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dollars: "" };
    }
    handleChange = event => {
        this.setState({ dollars: event.target.value });
    };
// The input assigns the value to the "dollars" which gets updated inside the state, and as the value is updated, the "handleChange" is run to update "dollars" with the value of the input.
    render() {
        const dollars = this.state.dollars;
        return (
            <div>
                <h1>Enter Amount in Dollars:</h1>
                <input autoFocus value={dollars} onChange={this.handleChange} />
                <br />
                R&nbsp;
                <ConvertRands input={dollars} />
                <br />
                &euro;&nbsp;
                <ConvertEuros input={dollars} />
                <br />
                &pound;&nbsp;
                <ConvertPounds input={dollars} />
            </div>
        );
    }
}

export default Converter;
