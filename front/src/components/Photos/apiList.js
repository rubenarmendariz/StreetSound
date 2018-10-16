import axios from 'axios';

export default class PhotoList {
  constructor() {
    
    this.profilePicture = axios.create({
      baseURL: 'http://localhost:3000/api/auth/first-user/pictures',
      withCredentials: true
    });
  }

  addPicture(file) {
    const formData = new FormData();
    formData.append("addPhoto", file)

    return this.profilePicture
      .post('/listPhoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
  }
}
