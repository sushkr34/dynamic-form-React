import React from "react";
import TextField from "./components/TextField";
import DropDown from "./components/DropDown";

class Flexi extends React.Component {
  render() {
    const { config, onSubmit, onChange } = this.props;
    const { items } = config;
    // console.log (this.props)
    return (
      <div>
        <form>
          {items.map(item => {
            if (item.type === "TextField") {
              return (
                <TextField
                  label={item.label}
                  name={item.name}
                  onChange={onChange}
                />
              );
            }
            if (item.type === "DropDown") {
              return (
                <DropDown
                  label={item.label}
                  name={item.name}
                  value={item.values}
                  onChange={onChange}
                />
              );
            }
          })}
          <input type="button" value="Submit" onClick={onSubmit} />
        </form>
      </div>
    );
  }
}
export default Flexi;
