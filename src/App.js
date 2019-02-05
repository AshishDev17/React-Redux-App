import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Authors from './components/Authors.js';
import AddAuthor from './components/AddAuthor.js';
import EditAuthor from './components/EditAuthor.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Authors} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/addAuthor" component={AddAuthor} />
        <Route exact path="/editAuthor/:id" component={EditAuthor} />
      </Switch>
    );
  }
}

export default App;
