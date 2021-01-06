import logo from '../img/logo.png';

import './Title.css'

import React, { Component } from 'react'

class Title extends Component {
    render () {
        return (
            <div className="title-logo">
                <img src={logo} alt="Logo"/>
            </div>
        )
    }
}

export default Title

