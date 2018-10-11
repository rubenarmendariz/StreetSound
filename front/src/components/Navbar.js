// navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
    console.log(this.props.user)
    if (this.props.userInSession) {
      return (
        // <nav className="nav-style">
        //   <ul>
        //     <li><a onClick={this.handleLogout}>Cerrar sesion</a></li>
        //     <Link to='/musicos'>Musicos</Link>
        //     <Link to = "/profile">
        //     <li><a onClick={this.handleLogout}>Mi Perfil</a></li>
        //     </Link>
        //   </ul>

        //   <h2>Welcome, {this.state.loggedInUser.username}</h2>
        // </nav>
<div>
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <Link to='/musicos'>Musicos</Link>
      <p className="navbar-item">
      
      </p>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"></hr>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        
        
          <Link to = "/">
           <button onClick={this.handleLogout}>Cerrar sesion</button>
           </Link>
         
           <Link to = "/profile">
             <button>Mi Perfil</button>
             </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  
</div>


        
      )
    } else {
      return (
        <div>
          {/* <nav className="nav-style">
            <ul>
            <li><Link to='/musicos'>Musicos</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav> */}


         <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <Link to='/musicos'>Musicos</Link>
      <p className="navbar-item">
      
      </p>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"></hr>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        
        <Link to='/signup'>
          <button className="button is-primary">
            <strong>Sign up</strong>
          </button>
          </Link>
          <Link to='/login'>
          <button className="button is-light">
            Log in
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>

          
        </div>


      )
    }
  }
}

export default Navbar;