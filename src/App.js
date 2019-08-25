import React from "react";
import Converter from './Components/Converter';
import Cards from './Components/Cards';
import Header from './Components/Header';
import "./App.css";

// Special styling for the drop down list
const styling = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "250px",
  marginBottom: "335px",
};

// Setting the initial state
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selection: 0 };
  }
  
  // The value of the selected is targeted and sets the state as soon as "onChange" occurs
  dropDownList = event => {
    this.setState({ selection: event.target.value });
  };

  // This is the dropdown list. Depending on which option is selected depends on which component is called. 
  render() {    
    const dropDownList = ["Select","Currency converter", "Win!"];
    const options = [<Header/>,<Converter />, <Cards />];
    return (
      <div>
        <select onChange={this.dropDownList}>
          {dropDownList.map((x, i) => (
            <option value={i} key={i}>
              {x}
            </option>
          ))}
        </select><br/>
        <hr/><br/>
        {options[this.state.selection]}
      </div>
    );
  }
}

// Calling the "Dropdown" class above and the styling variable to apply the styling
const App = () => (
  <div style={styling}>
    <Dropdown />
  </div>
);

export default App;


