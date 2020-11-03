import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <>
      <TodoContainer />
      <CounterContainer />
    </>
  );
}

export default App;
