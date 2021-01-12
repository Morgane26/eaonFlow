import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 43.3,
            lng: 5.4
    },
        zoom: 11
    };

render() {
    return (
      // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '400px' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY/* YOUR KEY HERE */ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >            
          < AnyReactComponent
            lat={43.3}
            lng={5.4}
            text="C'est pas la capitale c'est Marseille bébé"
          />
            </GoogleMapReact>
        </div>
    );
}
}

export default SimpleMap;