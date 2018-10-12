import React, { Component } from 'react';
import axios from 'axios';
// import SimpleMap from './../GoogleMapReact';
import AuthService from '../auth/AuthService';

class Show extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          title: '',
           day: '',
           month:'',
           hour:'',
           latitude: Number,
           longitude: Number,
           description:'',
           genero:''
        
        };
        this.service = new AuthService();
      ;
    }
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      const title = this.state.title;
      const day = this.state.day;
      const month = this.state.month;
      const hour = this.state.hour;
      const latitude = this.state.latitude;
      const longitude = this.state.longitude;
      const description = this.state.description;
      const genero = this.state.genero;




      this.service.newShow(title, day, month, hour,latitude,longitude,description, genero)
      .then( response => {
          this.setState({
            title: "", 
            day: "",
            month:    "",
            hour:"",
            latitude:Number,
            longitude:Number,
            description:"",
            genero:""
          });
          this.props.getUser(response.user)
      })
      .catch( error => console.log(error) )
    }
    
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  
    render() {
  
      return (<div>
       
  
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>genero:</label>
            <input type="text" name="genero" value={this.state.genero} onChange={e => this.handleChange(e)} />
          </fieldset>
  
          <fieldset>
            <label>description:</label>
            <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          </fieldset>
          <fieldset>
          <label>Address</label>

  <input id="lat-pos" type="" name="latitude" value={this.state.latitude} onChange={e => this.handleChange(e)} placeholder="Latitude" />
  <input id="lng-pos" type="" name="longitude" value={this.state.longitude} onChange={e => this.handleChange(e)} placeholder="Longitude" />
           </fieldset>
          <input type="submit" value="Login" />
          
        </form>
  
        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>)
    }
  }
  
  export default Show;