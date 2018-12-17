import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar.js'
import Carousel from './carousel/Carousel.js'
import Full_Img from './full_img/Full_Img'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
              <main role="main">
                  <Route exact path="/" component={Carousel} />
                  <Route path="/full_img/:id" component={Child} />
              </main>
          </div>
        </Router>
    );
  }
}

function Child({ match }) {
    return (
        <div class="container insta-pics">
            <div class="row">
                <p><img src={"/img/" + match.params.id + ".jpg"} /></p>
            </div>
        </div>
    );
}

export default App;
