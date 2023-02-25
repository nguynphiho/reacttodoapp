import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp title="Todo"></TodoApp>
    </div>
  );
}

export default App;