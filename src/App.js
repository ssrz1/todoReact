import React, { Component } from "react";

export default class App extends React.Component {
  state = {
    text: ""
  };

  handleSubmit(event) {
    //on submit we donot want submission to gone so we use preventDefault()
    event.preventDefault();
    let text = this.state.text;
    console.log("form was submitted", text);
    this.setState({ text: "" });
  }
  handleChange(event) {
    let text = event.target.value;
    console.log(text);
    this.setState({ text: text });
  }
  render() {
    return (
      <div>
        <p>Todo</p>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

//export default App;
