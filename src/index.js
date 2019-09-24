import React from "react";
import ReactDOM from "react-dom";
import Flexi from "./Flexi";
import "./styles.css";

class App extends React.Component {
  state = {
    data: [],
    flexiConfig: {
      items: [
        {
          name: "person_name",
          label: "Person's Name",
          type: "TextField"
        },

        {
          name: "states",
          label: "Person's State",
          type: "DropDown",
          values: ["Maharashtra", "Kerela", "Tamil Nadu"]
        }
      ]
    }
  };
  onFlexiSubmit = e => {
    console.log(this.state.data);
  };
  handleChange = (key, value) => {
    const { data } = this.state;
    this.setState({
      ...this.state,
      data: { ...data, [value]: key }
    });
    console.log(this.state.data);
  };
  render() {
    const { flexiConfig, data } = this.state;
    const { onFlexiSubmit, handleChange } = this;
    return (
      <div>
        <Flexi
          onSubmit={onFlexiSubmit}
          config={flexiConfig}
          onChange={handleChange}
          data={this.state}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
