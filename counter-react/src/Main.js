import React, { Component } from "react";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1> Counter </h1>
        <h1>0 </h1>
        <button className="btn btn-success"> Increment </button>
        <button className="btn btn-danger"> Decrement </button>
        <button className="btn btn-primary"> Reset </button>
      </div>
    );
  }
}

export default Main;