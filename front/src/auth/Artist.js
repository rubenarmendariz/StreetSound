import axios from 'axios';

class Artist {
    constructor(){
        this.route = axios.create({
            baseURL:'http://localhost:3000/api/artist',
            withCredentials:true
        })
    }

    newShow = (title, date, hour, latitude,longitude, description, genero) => {
        return this.route.post('/show-creation', {title, date, hour, latitude, longitude, description,genero})
        .then(response => response.data)
      }


     editUser = (name, username, email, genero, id) =>{
        
         return this.route.post(`/profile/${id}/edit`, {name, username,email, genero})
         .then(response =>console.log(response))
    
     }


}
export default Artist;