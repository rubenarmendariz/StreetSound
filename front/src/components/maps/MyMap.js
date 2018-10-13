import React, { Component } from 'react';
import { render } from 'react-dom';
import geolocalize from './geolocalize'

// class MyMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       marker:
//         {
//           title: "Marker",
//           position: { lat: '', lng: '' }
//         }
//     };
//     this.onScriptLoad = this.onScriptLoad.bind(this)
//   }

//   onScriptLoad() {
//     const map = new window.google.maps.Map(
//       document.getElementById(this.props.id),
//       this.props.options);
//     this.onMapLoad(map)
//   }
//   onMapLoad = (map) => {
//     let marker;
//     let clickPos= {
//       lat:0,
//       lng:0
//     };
  
//     /* map.addListener('click', (e) =>{
//       clickPos = {
//         lat:e.latLng.lat(),
//         lng:e.latLng.lng()
//       } */
//       map.addListener('click', function(e) {
//         clickPos = {
//           lat:e.latLng.lat(),
//           lng:e.latLng.lng()
//         }
//         console.log(clickPos);
//         marker.setPosition(clickPos);
//       });
      
//       geolocalize().then(center => {
//         map.setCenter(center);
//         marker = new window.google.maps.Marker({
//           position: center,
//           map: map
//         });
//         //marker.setPosition(clickPos);
//         this.props.getLoc(clickPos.lat, clickPos.lng)
//       //marker.setPosition(clickPos);
//       this.setState({
//         marker:
//           {
//             title: "Marker",
//             position: { lat: clickPos.lat, lng: clickPos.lng }
//           }
//       })
//         console.log("MARKER: ", marker);
//       });



////----------------------------------------------------

import React from 'react';

import './index.css';

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 455,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
    };
  }

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    map.addListener('zoom_changed', () => {
      this.setState({
        zoom: map.getZoom(),
      });
    });

    map.addListener('maptypeid_changed', () => {
      this.setState({
        maptype: map.getMapTypeId(),
      });
    });

    let marker = new window.google.maps.Marker({
      map: map,
      position: {lat: -33.8688, lng: 151.2195},
    });

    // initialize the autocomplete functionality using the #pac-input input box
    let inputNode = document.getElementById('pac-input');
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),
      });

      // bring the selected place in view on the map
      map.fitBounds(place.geometry.viewport);
      map.setCenter(location);

      marker.setPlace({
        placeId: place.place_id,
        location: location,
      });
    });
  }

  render() {
    return (
      <div id='app'>
        <div id='map' />
      </div>
    );
  }
};


        /* let marker = new window.google.maps.Marker({
          position: { lat: clickPos.lat, lng: clickPos.long },
          map: map,
          title: 'Hello!'
        }); */
      
      /* this.props.getLoc(clickPos.lat, clickPos.lng)
      //marker.setPosition(clickPos);
      this.setState({
        marker:
          {
            title: "Marker",
            position: { lat: clickPos.lat, lng: clickPos.lng }
          }
      }) */
    //});

    
//   }

//   componentDidMount() {
//     if (!window.google) {
//       var s = document.createElement('script');
//       s.type = 'text/javascript';
//       s.src = `https://maps.google.com/maps/api/js?key=AIzaSyAipHldqlNVFFDnn3uPGera7sIh05RqRi8`;
//       var x = document.getElementsByTagName('script')[0];
//       x.parentNode.insertBefore(s, x);
//       // Below is important. 
//       //We cannot access google.maps until it's finished loading
//       s.addEventListener('load', e => {
//         this.onScriptLoad()
//       })
//     } else {
//       this.onScriptLoad()
//       //this.onMapLoad()
//     }
//   }

//   render() {
//     return (
//       <div style={{ width: 500, height: 500 }} id={this.props.id} />
//     );
//   }
// }

// export default MyMap