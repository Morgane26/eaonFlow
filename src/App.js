import './App.css';
import Sidebar from './components/Sidebar'
import Title from './components/Title'


import ellipse from './img/ellipse.png'

import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
            <div className="div-body">
              <Sidebar/>
                <div className="content">
                  <Title/>
 
                  <div className="ellipse">
                    <img src={ellipse} alt="Ellipse" />
                  </div>
                </div>
            </div>
    )
  }
}


export default App;



