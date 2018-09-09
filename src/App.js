import React, { Component } from 'react';
import QuestionWindow from './containers/question-window';
import CharsetBar from './containers/charset-bar';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <QuestionWindow/>
        <CharsetBar />
      </div>
    );
  }
}

export default App;
