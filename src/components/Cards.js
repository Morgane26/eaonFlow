import './Cards.css'

import React, { Component } from 'react';

class Cards extends Component {
    render () {
        return (
            <div className="cards">
                <div className="card-one"/>
                    <div className="box-of-two-cards">
                        <div className="card-two"/>
                            <div className="card-three"/>
                    </div>
                        <div className="card-four"/>
            </div>
        )
        }
}
export default Cards


