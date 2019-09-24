import React from "react";
class TextField extends React.Component {
  render() {
    const { label, name, onChange } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          type="text"
          onChange={e => {
            onChange(e.target.value, name);
          }}
        />
      </div>
    );
  }
}
export default TextField;
