// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3000/api/auth',
      withCredentials: true
    });
  }
  newShow = (title, day, month, hour, latitude, longitude, description, genero) => {

    return this.service.post('/show-creation', { title, day, month, hour, latitude, longitude, description, genero })
      .then(response => response.data)
  }

  signup = (username, password, email, isArtist) => {
    console.log(isArtist)
    return this.service.post('/signup', { username, password, email, isArtist })
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser')
      .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout')
      .then(response => console.log(response))
    // .then(response => response.data)
  }

  newVideo = (url) => {
    return this.service.post('/newVideo', { url })
      .then(response => 
        response.data
      )
  }

}

export default AuthService;