import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ForumItem';
import Button from '@material-ui/core/Button';
import { List, ListItem, Icon, ListItemIcon } from '@material-ui/core';
import ForumItem from './components/ForumItem';
import AddItemContainer from './containers/AddForumItem';
import ForumListContainer from './containers/ForumListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>Hallo ik ben Dimitri</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="raised" color="primary">
         Hello World
        </Button>
        <ForumListContainer></ForumListContainer>
          <AddItemContainer></AddItemContainer>
      </div>
    );
  }
} 

export default App;
