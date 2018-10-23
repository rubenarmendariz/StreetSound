// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'
// import { isBoolean } from 'util';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
// import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';






class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '', isArtist: false };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const isArtist = this.state.isArtist

    this.service.signup(username, password, email, isArtist)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          email: "",
          isArtist
        });
        this.props.getUser(response.user)
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (

      <div className="styleLogin" >
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          style={{ height: "60vh", fontSize:"20px"}}
        >
          <h3>Regístrate!</h3>

          {/* <form onSubmit={this.handleFormSubmit}>  */}

          

          <FormControl onSubmit={this.handleFormSubmit} style={{ size: "20" }}>
            <InputLabel >Username:</InputLabel>
            <Input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </FormControl>

          <FormControl >
            <InputLabel>Password</InputLabel>
            <Input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}
              id="custom-css-input" />
          </FormControl>

          <FormControl>
            <InputLabel >Email</InputLabel>
            <Input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
          </FormControl>

          <FormControl>
            <input type="checkbox" name="isArtist" value={true} onClick={e => this.handleChange(e)} /> <span>Is artist?</span>
          </FormControl>

          <Button type="submit" value="Login" onClick={this.handleFormSubmit} color="primary"> Sign Up </Button>
          {/* <input type="submit" value="Sign up" />  */}
        </Grid>
      </div>

    )

  }



}


export default Signup;


{/* <fieldset>
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

    


    
    <input type="submit" value="Sign up" /> */}
{/* </form> */ }