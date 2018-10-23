import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from './sections/Profile';
import MyProfile from './sections/myProfile';
// import ProjectList from './components/projects/ProjectList';
import Navbar from './components/Navbar';
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './auth/Signup';
import Login from './auth/Login';
import AuthService from './auth/AuthService';
import HomePage from './sections/Home';
import Musicos from './components/artist/Musicos'
import Spotify from './sections/Spotify'
// import Contents from './components/contents/Contents'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser = (userObj) => {
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

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }
  updateVideo(newVideoList) {
    const _user = {...this.state.loggedInUser};
    _user.addVideo = newVideoList;
    this.setState({loggedInUser:_user})
    console.log(this.state.loggedInUser)
} 

  render() {
    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <div className="app-content">
          <Route exact path='/musicos' render={() => <Musicos userInSession={this.state.loggedInUser} getUser={this.getTheUser} />} />
          <Route exact path='/myProfile' render={() => <MyProfile updateVideo={(newVideoList) => this.updateVideo(newVideoList)}userInSession={this.state.loggedInUser} getUser={this.getTheUser} />} />
          <Route exact path="/profile/:id" component={Profile} ></Route>
          <Route exact path='/' render={() => <HomePage getUser={this.getTheUser} />} />
          <Route exact path='/login' render={() => <Redirect to="/" getUser={this.getTheUser} />} />
          <Route exact path='/signup' render={() => <Redirect to="/" getUser={this.getTheUser} />} />
          {/* <Contents></Contents> */}
          </div>

        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <div className="app-content">
          <Switch>
            <Route path='/similar' render={() => <Spotify getUser={this.getTheUser} />} />
            <Route exact path='/' render={() => <HomePage getUser={this.getTheUser} />} />
            <Route exact path='/musicos' render={() => <Musicos getUser={this.getTheUser} />} />
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
            <Route exact path='/profile' render={() => <Redirect to="/" getUser={this.getTheUser} />} />
            {/* <Route path="/profile" render={() => <Profile getUser={this.getTheUser}/>} ></Route> */}
          </Switch>
          </div>
        </div>
      );
    }
  }
}

export default App;

