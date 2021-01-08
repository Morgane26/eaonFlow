import './App.css';

import Sidebar from './components/Sidebar'
import Title from './components/Title'
import Cards from './components/Cards'

import React, { Component } from 'react';

class App extends Component { 
  render () {
    return (
      <div className="div-body">
        <Sidebar/>
          <div className="content">
            <Title/>
            <Cards/>
          </div>
      </div>
    )
  }
}


export default App;



