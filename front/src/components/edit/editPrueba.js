import React, { Component } from 'react';
import Artist from '../../auth/Artist';
import CardPhoto from '../Photos/cardPhoto';



class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      name: '',
      genero: '',


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





    this.route.editUser(username, name, email, genero, id)
      .then(response => {
        this.setState({
          username: "",
          name: "",
          email: "",
          genero: "",
          id: ""


        });
        this.props.getUser(response.user)
          .then(user => this.setState({ id: user._id }))

      })
      .catch(error => console.log(error))
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    var el = document.getElementsByClassName('modal');
    return (
      <div>


        <form onSubmit={this.handleFormSubmit}>
          <fieldset class="form-group">
            <label for="username">username:</label>
            <input type="text" name="username" class="form-control" id="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset class="form-group">
            <label for="gnr">genero:</label>
            <input type="text" name="genero" class="form-control" id="gnr" value={this.state.genero} onChange={e => this.handleChange(e)} />
          </fieldset>
          <fieldset class="form-group">
            <label for="name">title:</label>
            <input type="text" name="name" class="form-control" id="usr" value={this.state.name} onChange={e => this.handleChange(e)} />
          </fieldset>
          <fieldset class="form-group">
            <label for="email">email :</label>
            <input type="text" name="email" class="form-control" id="email" value={this.state.description} onChange={e => this.handleChange(e)} />
          </fieldset>
          <fieldset>
            <CardPhoto></CardPhoto>
          </fieldset>


          <footer className="modal-card-foot">
            <button type="submit" value="login" onClick={() => el[1].classList.toggle('is-active')} class="button is-success">Save changes</button>
            <button onClick={() => el[1].classList.toggle('is-active')} className="button">Cancel</button>
          </footer>


          {/* <button  type="submit" value="Login" /> */}

        </form>

        {/* <h1>{this.state.error ? 'Error' : ''}</h1>  */}



      </div>
    )
  }
}

export default User;