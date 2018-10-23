import React, { Component } from 'react';
import AuthService from './AuthService'
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (

      <div style={{fontSize:"30px"}} className="styleLogin" >
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          height="400px"
        >
          <h3>Iniciar Sesión</h3>


          <FormControl>
            <InputLabel >Username:</InputLabel>
            <Input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </FormControl>

          <FormControl >
            <InputLabel>Password</InputLabel>
            <Input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}
              id="custom-css-input" />
          </FormControl>
          <Button type="submit" value="Login" onClick={this.handleFormSubmit} color="primary"> Login </Button>


          {/* <fieldset>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>

      {/* //  <fieldset>
      //   <label>Password:</label>
      //  <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
      //  </fieldset>
       
      //   <input type="submit" value="Login" /> */} 
        
     

        <h1>{this.state.error ? 'Error' : ''}</h1>

</Grid>
    </div >
    )
  }
}

export default Login;
