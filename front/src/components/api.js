import axios from 'axios';

export default class PhotoProfile {
  constructor() {
    
    this.profilePicture = axios.create({
      baseURL: 'http://localhost:3000/api/artist/first-user/pictures',
      withCredentials: true
    });
  }

  addPicture(file) {
    const formData = new FormData();
    formData.append("PicProfilePath", file)

    console.log('DEBUG formData', formData.get("PicProfilePath"));
    
    return this.profilePicture
      .post('/edit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
  }
}
