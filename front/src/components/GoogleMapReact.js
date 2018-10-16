
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Marker} from '../components/Marker';
import {Position} from './Position'
import { format } from 'path';

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




class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.state={
      lat: Number,
      lng:Number

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
    

    
   
    
  

  _onClick = ({x, y, lat, lng, event}) => {
    this.props.changeInputs(lat,lng)
    
  }
  function _onClick(obj){ console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);}

  // ES5 users
  
  
  
  return (
    // console.log(this.defaultProps)
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
         
         {console.log(this.lat)}
        <GoogleMapReact
        
        
        
          onClick={_onClick} 
          bootstrapURLKeys={{ key:'AIzaSyAipHldqlNVFFDnn3uPGera7sIh05RqRi8'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
          

          <Marker  ></Marker>
        </GoogleMapReact>
   
          
      </div>
    );
  }
}

export default SimpleMap;
