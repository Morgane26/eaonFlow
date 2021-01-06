import './App.css';
import Sidebar from './components/Sidebar'
import Title from './components/Title'



import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
            <div className="div-body">
              <Sidebar/>
                <div className="content">
                  <Title/>
                      <div className="cards">
                        <div className="card-one"/>
                          <div className="card-two"/>
                            <div className="card-three"/>
                              <div className="card-four"/>
                      </div>
                </div>
            </div>
    )
  }
}


export default App;



