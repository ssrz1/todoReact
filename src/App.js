import React, { Component } from "react";

class App extends Component {
  handleSubmit(event) {
    //on submit we donot want submission to gone so we use preventDefault()
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <p>Todo</p>

        <form onSubmit={this.handleSubmit}>
          <input />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
