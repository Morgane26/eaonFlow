import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



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
            </GoogleMapReact>
        </div>
    );
}
}

export default SimpleMap;