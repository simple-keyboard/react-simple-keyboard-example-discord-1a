import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";

class App extends Component {
  state = {
    layoutName: "ip",
    input: ""
  };

  onChange = input => {
    this.setState({
      input: input
    });
    console.log("Input changed", input);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    if (button === "{clear}") this.clearScreen();
  };

  clearScreen = () => {
    this.setState(
      {
        input: ""
      },
      () => {
        this.keyboard.clearInput();
      }
    );
  };

  onChangeInput = event => {
    let input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        this.keyboard.setInput(input);
      }
    );
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={e => this.onChangeInput(e)}
        />
        <Keyboard
          ref={r => (this.keyboard = r)}
          onChange={input => this.onChange(input)}
          onKeyPress={button => this.onKeyPress(button)}
          theme={"hg-theme-default hg-layout-default myTheme"}
          layoutName={this.state.layoutName}
          layout={{
            ip: ["1 2 3", "4 5 6", "7 8 9", ". 0 {clear}", "{bksp} {enter}"]
          }}
          display={{
            "{clear}": "C",
            "{bksp}": "backspace",
            "{enter}": "enter"
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
