import React from 'react';
import logo from './logo.svg';
import './App.css';
import './First_react_component';
import './index.css';
import DataFetching from './fetch_api_react_axios.jsx';
import './SHOW_CONTEXT';
import First_react_component from './First_react_component';
import SHOW_CONTEXT from './SHOW_CONTEXT';
import './Searcher';
import Searcher from './Searcher';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Searcher/>
        <First_react_component/>
        <SHOW_CONTEXT/>
        <DataFetching/>
      </header>
    
    </div>
  );
}

export default App;
