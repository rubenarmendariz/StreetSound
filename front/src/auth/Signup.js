// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'
import { isBoolean } from 'util';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '' , isArtist : false};
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email    = this.state.email;
    const isArtist = this.state.isArtist

    this.service.signup(username, password, email, isArtist)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            email:    "",
            isArtist
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          <fieldset>
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
       
             <label  for="check">You are an artist</label>
            <input  type="checkbox" name="isArtist" value= {true} onClick={ e => this.handleChange(e)} />Is artist?
          </fieldset>

          


          
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;