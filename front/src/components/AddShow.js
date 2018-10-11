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
        //   this.props.getUser(response.user)
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
            <label>title:</label>
            <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
          </fieldset>
  
          <fieldset>
            <label>description:</label>
            <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          </fieldset>
         
          <input type="submit" value="Login" />
          
        </form>
  
        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>)
    }
  }
  
  export default Show;