// If Do Changes, Firstly look at Apps.js or the largest file (Not in Folder)
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateLocation from './components/CreateLocation';
import SearchDetailList from './components/SearchDetailList';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={SearchDetailList} />
            <Route path='/create-location' component={CreateLocation} />
            {/* <Route path='/edit-book/:id' component={UpdateBookInfo} /> */}
            {/* <Route path='/show-book/:id' component={ShowBookDetails} /> */}
          </div>
        </Router>
        <footer className='footer-section'> All right Reserved @2024</footer>
      </div>
    );
  }
}


export default App;