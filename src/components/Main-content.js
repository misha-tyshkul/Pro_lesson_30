import { Component } from "react";
class MainContent extends Component {
  render() {
    return (
      <main className="main-content">
        <h1>{this.props.text}</h1>
      </main>
    );
  }
}

export default MainContent;
