import './Cards.css';

import React, { Component } from 'react';
import SimpleMap from './Simplemap';

class Cards extends Component {
    state = {
        post: {}
    }
    componentDidMount () {
        fetch("https://smart-port-data-ampmetropole.opendatasoft.com/api/v2/catalog/datasets?apikey=" + process.env.REACT_APP_API_KEY)
            .then((response) => {
                return response.json()
            })
            .then ((result) => {
                this.setState({post: result});
                console.log(result)
            })

    }

    render () {
        return (
            <div className="cards">
                <div className="card-one">
                {this.setState.post}
                <SimpleMap/>
                </div>
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

