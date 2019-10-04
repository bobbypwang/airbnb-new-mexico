import React, { Component } from 'react'
import { Route, Switch, Link} from "react-router-dom";

import './App.scss';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Listing from './components/Listing';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search?s=something'>Fake Search Term "something"</Link></li>
            <li><Link to='/listing/12345'>Individual Listing</Link></li>
          </ul>
        </div>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/listing/:id' component={Listing} />
            <Route path='/search' component={SearchResults} />
          </Switch>
        </div>
      </div>
    )
  }
}
