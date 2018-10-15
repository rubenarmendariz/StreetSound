
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Marker} from '../components/Marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const geolocalize = () => {
  return new Promise((resolve, reject) => {
      if (!navigator.geolocation) reject('No geolocation available');
      navigator.geolocation.getCurrentPosition( (pos) => {
        const center = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        resolve(center);
      }, reject)
  });
}


const setPosOnForm = (latlng) => {
  document.getElementById('lat-pos').value = latlng.lat;
  document.getElementById('lng-pos').value = latlng.lng;

}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.4465,
      lng: -3.6489
    },
    zoom: 15
  };
componentDidMount(){
  window.addEventListener('click',(e)=>console.log(e))
}
  render() {
    
   
    
  //  this.addListener('click', function(e) {
  //     const clickPos = {
  //       lat:e.latLng.lat(),
  //       lng:e.latLng.lng()
  //     }
  //     console.log(clickPos);
  //     Marker.setPosition(clickPos);
  //     setPosOnForm(clickPos)
  //   });
    // geolocalize().then(center => {
    //   SimpleMap.setCenter(center);
    //   Marker = new window.google.maps.Marker({
    //     position: center,
    //     map: SimpleMap
    //   });
    //   //map.fitBounds(new google.maps.LatLng([center, center]));
    //   setPosOnForm(center);
    // });
  
    return (
      // console.log(this.defaultProps)
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAipHldqlNVFFDnn3uPGera7sIh05RqRi8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={40.4168}
            lng={-3.7038}
            text={'Kreyser Avrora'}
          /> */}

          <Marker lat ="40.4465" lng= "-3.6489"></Marker>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// import React from 'react';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-map-react';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';

// export class GoogleMapsContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     }
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }
//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     }
//     return (
//       <Map
//         item
//         xs = { 12 }
//         style = { style }
//         google = { this.props.google }
//         onClick = { this.onMapClick }
//         zoom = { 14 }
//         initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
//       >
//         <Marker
//           onClick = { this.onMarkerClick }
//           title = { 'Changing Colors Garage' }
//           position = {{ lat: 39.648209, lng: -75.711185 }}
//           name = { 'Changing Colors Garage' }
//         />
//         <InfoWindow
//           marker = { this.state.activeMarker }
//           visible = { this.state.showingInfoWindow }
//         >
//           <Paper>
//             <Typography
//               variant = 'headline'
//               component = 'h4'
//             >
//               Changing Colors Garage
//             </Typography>
//             <Typography
//               component = 'p'
//             >
//               98G Albe Dr Newark, DE 19702 <br />
//               302-293-8627
//             </Typography>
//           </Paper>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
// export default GoogleApiWrapper({
//     api: 'AIzaSyAipHldqlNVFFDnn3uPGera7sIh05RqRi8'
// })(GoogleMapsContainer)