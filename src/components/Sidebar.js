import logoSidebar from '../img/logoSidebar.png'
import logoDashboard from '../img/logoDashboard.png'
import logoFlow from '../img/logoFlow.png'
import logoByEnergy from '../img/logoByEnergy.png'
import logoLogin from '../img/logoLogin.png'

import './Sidebar.css';

import React, { Component } from 'react';

class Sidebar extends Component {
    render () {
        return (
            <div className="sidebar">
                <div className="sidebar-icon">
                    <img src={logoSidebar} alt="Logo Sidebar"/>
                </div>
                <div className="sidebar-group">
                    <img src={logoDashboard} alt="Logo Dashboard"/>
                    <img src={logoFlow} alt="Logo Flow"/>
                    <img src={logoByEnergy} alt=" Logo By Energy" />
                </div>
                <div className="sidebar-connexion">
                    <img src={logoLogin} alt="Logo Login" />
                </div>
            </div>
        )
        }
}

export default Sidebar
