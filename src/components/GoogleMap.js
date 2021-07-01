import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import API_KEY from '../API_KEY.js'

const mapStyles = {
    width: '95%',
    height: '40rem',
    margin: 'auto',
    position: 'absolute',
  }

class GoogleMap extends React.Component {

    render() {
        return (
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: API_KEY
  })(GoogleMap)