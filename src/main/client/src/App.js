import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showText: false
    };
  }

  handleClick() {
    this.setState(prevState => ({
      showText: !prevState.showText 
    }));
  }

  render() {
    const secretElement =
      <div className="secret">Top secret text</div>;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test Application</h1>
        </header>
        <p className="App-intro">
          <button className="myButton" onClick={this.handleClick.bind(this)}>
            Click Me
          </button>
        </p>
        {this.state.showText && secretElement}
      </div>
    );
  }
}

export default App;
