import React, { Component } from "react";
import DisplayList from "./DisplayList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }
  //adding items by using concatination
  handleSubmit(event) {
    //on submit we donot want submission to gone so we use preventDefault()
    event.preventDefault();
    let text = this.state.text;
    let newItems = this.state.items.concat(text);
    this.setState({ text: "", items: newItems });
  }
  handleChange(event) {
    let text = event.target.value;
    this.setState({ text: text });
  }
  handleDelete(itemToDelete) {
    let newItems = this.state.items.filter(_item => {
      return _item !== itemToDelete;
    });
    this.setState({ items: newItems });
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

        <DisplayList
          handleDelete={this.handleDelete.bind(this)}
          items={this.state.items}
        />
      </div>
    );
  }
}

//export default App;
