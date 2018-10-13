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


     editUser = (name, username, email, genero, id) =>{
        
         console.log(id)
         return this.route.post(`/profile/${id}/edit`, {name, username,email, genero})
         .then(response =>console.log(response))
    
     }


}
export default Artist;