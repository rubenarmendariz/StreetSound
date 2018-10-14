import React, { Component, Children } from 'react';
import axios from 'axios';
// import SimpleMap from './../GoogleMapReact';
// import AuthService from '../auth/AuthService';
import Artist from '../auth/Artist';
import EditButton from '../components/editButton';
import AddPhotoPrueba from '../components/AddPhotoPrueba';

class User extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          username: '',
           email: '',
           name:'',
           genero:'',

        
        };
        this.route = new Artist();
      ;
    }
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      const username = this.state.username;
      const name = this.state.name;
      const email = this.state.email;
      const genero = this.state.genero;
      const id = this.state.id
     




      this.route.editUser(username, name, email, genero, id )
      .then( response => {
          this.setState({
            username: "", 
            name: "",
            email:    "",
            genero:"",
            id:""

            
          });
          this.props.getUser(response.user)
          .then(user => this.setState({id:user._id}))
          
      })
      .catch( error => console.log(error) )
    }
    
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
    
  
    render() {
  
      return (
      <div>
       
  
         <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>genero:</label>
            <input type="text" name="genero" value={this.state.genero} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>name:</label>
            <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          </fieldset>
  
  
          <fieldset>
            <label>username:</label>
            <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>email:</label>
            <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
          </fieldset>
          {/* <AddPhotoPrueba /> */}
          
          <input type="submit" value="Login" />
          
        </form>
  
        <h1>{this.state.error ? 'Error' : ''}</h1> 

      {/* <EditButton></EditButton> */}

<h1>ohciufehqwfucoweui</h1>
      </div>
      )
    }
  }
  
  export default User;