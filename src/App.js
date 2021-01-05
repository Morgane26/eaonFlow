import './App.css';
import logo from './img/logo.png';
import logoSidebar from './img/logoSidebar.png'
import ellipse from './img/ellipse.png'

import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
            <div className="div-body">
              <div className="sidebar">
                <div className="sidebar-icons">
                  <img src={logoSidebar} alt="Logo Sidebar"/>
                </div>
              </div>
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



