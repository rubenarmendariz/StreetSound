import React, { Component, } from 'react'; //hemos quitado children
// import axios from 'axios';
import Artist from '../../auth/Artist';
// import EditButton from './editButton';
// // import EditButton from '../components/editButton';
// import AddPhotoPrueba from '../AddPhotoPrueba';
// import Map from '../GoogleMapReact';


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
      var el = document.getElementsByClassName('modal');
      return (
      <div>
       
  
           <form onSubmit={this.handleFormSubmit}>
           <fieldset class="form-group">
  <label for="dcr">eeeeeeeee :</label>
  <input type="text" name="description" class="form-control" id="dcr" value={this.state.description} onChange={e => this.handleChange(e)}/>
        </fieldset>
          <fieldset class="form-group">
            <label for='gnr'>pepe:</label>
            <input type="text" name="genero" id='gnr' value={this.state.genero} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset class="form-group">
            <label for='name'>name:</label>
            <input type="text" class="form-group" id="name" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          </fieldset>
  
  
          <fieldset class="form-group">
            <label for ='username'>username:</label>
            <input type="text" id='username' class="form-group" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset class="form-group">
            <label for='email'>pepe:</label>
            <input type="text" id= 'email'name="email" class="form-group" value={this.state.email} onChange={e => this.handleChange(e)} />
          </fieldset>
          
         
        <footer className="modal-card-foot">
          <button type ="submit" value= "login" onClick={()=>el[1].classList.toggle('is-active')}class="button is-success">Save changes</button>
          <button onClick={()=>el[1].classList.toggle('is-active')} className="button">Cancel</button>
        </footer>
          
          
          {/* <button  type="submit" value="Login" /> */}
          
          </form>
          
        {/* <h1>{this.state.error ? 'Error' : ''}</h1>  */} 



      </div>
      )
    }
  }
  
  export default User;