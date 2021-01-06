import logoSidebar from '../img/logoSidebar.png'
import './Sidebar.css';


import React, { Component } from 'react';

class Sidebar extends Component {
    render () {
        return (
            <div className="sidebar">
                <div className="sidebar-icons">
                    <img src={logoSidebar} alt="Logo Sidebar"/>
                </div>
            </div>
        )
        }
}

export default Sidebar
