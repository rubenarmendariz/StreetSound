
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from './Marker';
import { Position } from './Position'
import { format } from 'path';

const AnyReactComponent = ({ text }) => <img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"></img>;

const geolocalize = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) reject('No geolocation available');
    navigator.geolocation.getCurrentPosition((pos) => {
      const center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      resolve(center);
    }, reject)
  });
}




class SimpleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: Number,
      lng: Number,
      marker: null

    }
  }
  static defaultProps = {
    center: {
      lat: 40.4465,
      lng: -3.6489

    },
    zoom: 15
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {







    _onClick = ({ x, y, lat, lng, event }) => {
      this.props.changeInputs(lat, lng)
      this.setState({
        marker: <AnyReactComponent lat={lat} lng={lng}></AnyReactComponent>
      })

    }
    function _onClick(obj) { console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event); }

    // ES5 users



    return (
      // console.log(this.defaultProps)
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>

        <GoogleMapReact



          onClick={_onClick}
          bootstrapURLKeys={{ key: 'AIzaSyAipHldqlNVFFDnn3uPGera7sIh05RqRi8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

        >


          {this.state.marker ? this.state.marker : <AnyReactComponent lat={40.4465} lng={-3.6489}></AnyReactComponent>}
        </GoogleMapReact>


      </div>
    );
  }
}

export default SimpleMap;
