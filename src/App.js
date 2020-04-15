import React, { Component } from "react";
import Plaintext from "./components/Plaintext";
import Ciphertext from "./components/Ciphertext";
import Shift from "./components/Shift";
import Paper from "@material-ui/core/Paper";

class Main extends Component {
  constructor(props) {
    super(props);
    // this.child = React.createRef();
    this.state = {
      alpha: "abcdefghijklmnopqrstuvwxyz".split(""),
      shift: "",
      plainTxt: "",
      cipherTxt: ""
    };
  }

  //callback func to get shift data
  cData = data => {
    this.setState({ shift: data.shift, plainTxt: "", cipherTxt: "" });
  };
  // logic backward conversion from ciphertext field
  handleCipherText = e => {
    var txt = e.target.value.toLowerCase();
    var cipherTxt = "";
    for (var i = 0; i < txt.length; i++) {
      var Index = this.state.alpha.indexOf(txt[i]) - this.state.shift;
      if (txt[i] === " ") {
        cipherTxt += txt[i];
        continue;
      }
      if (Index > 25) Index -= 26;
      if (Index < 0) Index += 26;
      if (e.target.value[i] === txt[i].toUpperCase()) {
        cipherTxt += this.state.alpha[Index].toUpperCase();
      } else cipherTxt += this.state.alpha[Index];
    }
    this.setState({ cipherTxt: e.target.value, plainTxt: cipherTxt });
  };

  // logic for forward conversion from plaintext
  handlePlainText = e => {
    var txt = e.target.value.toLowerCase();
    var cipherTxt = "";
    for (var i = 0; i < txt.length; i++) {
      var Index = this.state.alpha.indexOf(txt[i]) + this.state.shift;
      if (txt[i] === " ") {
        cipherTxt += txt[i];
        continue;
      }
      if (Index > 25) {
        Index -= 26;
      }
      if (e.target.value[i] === txt[i].toUpperCase()) {
        cipherTxt += this.state.alpha[Index].toUpperCase();
      } else cipherTxt += this.state.alpha[Index];
    }
    this.setState({ cipherTxt: cipherTxt, plainTxt: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <center>
          <h1>Caesar's Cipher</h1>
        </center>
        <Shift handleChange={this.cData} plainTxt={this.state.plainTxt} />
        <Paper elevation={10} className="child-container">
          <Plaintext
            value={this.state.plainTxt}
            onChange={this.handlePlainText}
            disabled={this.state.shift !== "" ? false : true}
          />
          <h1>&#8652;</h1>
          <Ciphertext
            value={this.state.cipherTxt}
            onChange={this.handleCipherText}
            disabled={this.state.shift !== "" ? false : true}
          />
        </Paper>
      </div>
    );
  }
}

export default Main;
