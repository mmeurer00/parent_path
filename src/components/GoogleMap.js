import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
    width: '25rem',
    height: '25rem',
    margin: 'auto',
    position: 'absolute'
  }

class GoogleMap extends React.Component {

    render() {
        return (
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDRvmxPBIidFUxEaUF8Rk9Hum0PaMxu-4Y'
  })(GoogleMap)