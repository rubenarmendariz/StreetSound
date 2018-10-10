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
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li><a onClick={this.handleLogout}>Cerrar sesion</a></li>
            <li><a onClick={this.handleLogout}>Mi Perfil</a></li>
          </ul>

          <h2>Welcome, {this.state.loggedInUser.username}</h2>
        </nav>
      )
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </div>

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Header extends Component {
//     render() {
//         return(
//             <div className="navbar bg-info d-flex justify-content-center navbar-expand-lg">
//                 <Link to="/"> <img src="https://image.flaticon.com/icons/svg/25/25694.svg" alt="" style={{height:"8vh"}}></img> </Link>
//             </div>
//         )
//     }
// }
      )
    }
  }
}

export default Navbar;