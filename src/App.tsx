import * as React from 'react';
import './App.css';
import CharsetBar from './containers/charset-bar';
import QuestionWindow from './containers/question-window';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <QuestionWindow/>
        <CharsetBar />
      </div>
    );
  }
}

export default App;
