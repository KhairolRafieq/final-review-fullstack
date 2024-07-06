import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateLocation from './components/CreateLocation';
import SearchDetailList from './components/SearchDetailList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={SearchDetailList} />
          <Route path='/create-location' component={CreateLocation} />
          {/* <Route path='/edit-book/:id' component={UpdateBookInfo} /> */}
          {/* <Route path='/show-book/:id' component={ShowBookDetails} /> */}
        </div>
      </Router>
    );
  }
}

export default App;