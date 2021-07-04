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

    constructor(props) {
        super(props);
    
        this.state = {
            stores: [{latitude:40.78604757057769, longitude:-73.97729373134123},
                    {latitude: 40.833944804756165, longitude: -73.94140637484008},
                    {latitude: 40.84484327317376, longitude: -73.91119401044466},
                    {latitude: 40.79619978023245, longitude:  -74.37192840482118},
                    {latitude: 40.80377665680528, longitude:  -74.3391500977571},
                    {latitude: 40.796499650543204, longitude: -74.21349397900795}]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
            onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 40.444, lng: -73.176}}
            >
            {this.displayMarkers()}
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: API_KEY
  })(GoogleMap)