import React, { Component } from 'react';
// import axios from 'axios';
// import SimpleMap from './../GoogleMapReact';
// import AuthService from '../auth/AuthService';
import SimpleMap from '../GoogleMapReact'
import Artist from '../../auth/Artist';
import * as Push from 'push.js'

import io from 'socket.io-client';
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      day: '',
      month: '',
      hour: '',
      latitude: 0,
      longitude: 0,
      description: '',
      genero: '',
      input: '',
      messages: []

    };
    this.route = new Artist();
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


    this.socket.emit('show');

    this.route.newShow(title, day, month, hour, latitude, longitude, description, genero)
      .then(response => {
        this.setState({
          title: "",
          day: "",
          month: "",
          hour: "",
          latitude: null,
          longitude: null,
          description: "",
          genero: "",
          input: '',
          messages: []
        });
        this.props.getUser(response.user)
      })
      .catch(error => console.log(error))
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  changeInputs = (latitude, longitude) => {
    this.setState({ latitude, longitude });
  }

  componentDidMount() {
    this.socket = io('localhost:3000');

    this.socket.on('show', () => {
      this.submitNoti();
    });
  }

  receiveMessage(msg) {
    //   this.setState({
    //     input:'',
    //     messages: [...this.state.messages, {msg,type:"server"}]
    //   })
    // }
  }
  submitNoti() {
    if (Push.Permission.has()) {
      Push.create("Hello world!", {
        body: "How's it hangin'?",
        timeout: 4000,
        onClick: function () {
          window.focus();
          this.close();
        }
      }

      );
    } else {
      console.log('CANT SEND NOTOFICATIONS')
    }
  }
  // let msg = this.state.input;
  // this.setState({
  //     // input:'',
  //     messages: [...this.state.messages, {msg,type:"me"}]
  // 


render() {
  var el = document.getElementsByClassName('modal')

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
        <SimpleMap changeInputs={(lat, lng) => this.changeInputs(lat, lng)}></SimpleMap>
      </fieldset>


      {/* <input type="submit" value="Login" /> */}
      <footer className="modal-card-foot">
        <button type="submit" value="login" onClick={() => el[0].classList.toggle('is-active')} class="button is-success">Save changes</button>
        <button onClick={() => el[0].classList.toggle('is-active')} className="button">Cancel</button>
      </footer>

    </form>

    <h1>{this.state.error ? 'Error' : ''}</h1>
  </div>)
}
  
}

export default Show;