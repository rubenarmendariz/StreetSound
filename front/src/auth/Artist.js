import axios from 'axios';

class Artist {
    constructor(){
        this.route = axios.create({
            baseURL:'http://localhost:3000/api/artist',
            withCredentials:true
        })
    }

    newShow = (title, day, month, hour, latitude,longitude, description, genero) => {
        console.log(description)
        return this.route.post('/show-creation', {title, day, month, hour, latitude, longitude, description,genero})
        .then(response => response.data)
      }


}
export default Artist;