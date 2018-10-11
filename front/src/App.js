import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Profile from './sections/Profile';
// import ProjectList from './components/projects/ProjectList';
import Navbar from './components/Navbar';
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './auth/Signup';
import Login from './auth/Login';
import AuthService from './auth/AuthService';
import HomePage from './sections/Home';
import Musicos from './components/artist/Musicos'
// import Contents from './components/contents/Contents'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Route exact path='/musicos' render={() => <Musicos getUser={this.getTheUser}/>}/>
            <Route path="/profile" render={() => <Profile getUser={this.getTheUser}/>} ></Route>
            <Route exact path='/' render={() => <HomePage getUser={this.getTheUser}/>}/> 
            <Route exact path ='/login' render = {() => <Redirect to = "/" getUser={this.getTheUser}/>}/>
            <Route exact path ='/signup' render = {() => <Redirect to = "/" getUser={this.getTheUser}/>}/>
            {/* <Contents></Contents> */}

          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
            <Navbar />
           
          
          <header className="App-header">
            <Switch>
              <Route exact path='/' render={() => <HomePage getUser={this.getTheUser}/>}/>
              <Route exact path='/musicos' render={() => <Musicos getUser={this.getTheUser}/>}/> 
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
              <Route path="/profile" render={() => <Profile getUser={this.getTheUser}/>} ></Route>
            </Switch>
          </header>
        </div>
      );
    }
  }
}

export default App;

