import React from "react";
class DropDown extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props;
    // console.log(this.props)
    return (
      <div>
        <label>{label}</label>
        <select
          onChange={e => {
            onChange(e.target.value, name);
          }}
        >
          {value.map(value => (
            <option value={value}>{value}</option>
          ))}
        </select>
      </div>
    );
  }
}
export default DropDown;
