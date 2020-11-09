import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import GithubProfileContainer from './containers/GithubProfileContainer';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <>
      <GithubProfileContainer />
      <TodoContainer />
      <CounterContainer />
    </>
  );
}

export default App;
