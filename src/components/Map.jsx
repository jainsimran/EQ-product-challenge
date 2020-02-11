import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '60%',
};

export class MapContainer extends Component {
  displayMarkers = () => {
    return this.props.poi.map((poi, id) => {
      return <Marker key={id} position={{
        lat: poi.lat,
        lng: poi.lon
      }}
        onClick={() => console.log(this.props.poi)} />
    })
  }

  render() {
    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 43.6708, lng: -79.3899 }}
        >
          {this.displayMarkers()}
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCk79ODgAFqY9di7oVX5Zh_zdIyecxZvks'
})(MapContainer);