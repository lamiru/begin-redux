import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
    <div className="app-template">
      <div className="counter">
        <Counter />
      </div>
      <div className="todo">
        <Todo />
      </div>
    </div>
    );
  }
}

export default App;
