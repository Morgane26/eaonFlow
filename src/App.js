import './App.css';
import Sidebar from './components/Sidebar'

import logo from './img/logo.png';
import ellipse from './img/ellipse.png'

import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
            <div className="div-body">
            <Sidebar/>
              <div className="title-logo">
                <img src={logo} alt="Logo"/>
                  <div className="ellipse">
                    <img src={ellipse} alt="Ellipse" />
                  </div>
              </div>
            </div>
    )
  }
}


export default App;



