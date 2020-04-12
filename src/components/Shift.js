import React, { Component } from "react";
// import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Shift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: ""
    };
  }

  handleChange = e => {

    this.setState({ shift: e.target.value });

    this.props.handleChange(e.target.value);

  };
  render() {
    return (
      <div className="shift">
        <center>
          <Select
            autoWidth={true}
            onChange={this.handleChange}
            value={this.state.shift}
            displayEmpty
          >
            <MenuItem value={this.state.shift} disabled>
              Enter shift amount
            </MenuItem>
            {[0, 1, 2, 3, 4, 5].map(String).map(x => (
              <MenuItem key={x} value={x}>
                {x}
              </MenuItem>
            ))}
          </Select>
        </center>
      </div>
    );
  }
}

export default Shift;
