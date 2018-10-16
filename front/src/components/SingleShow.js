import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleProfile extends Component {
  

    render() {
        let {user,description,genero} = this.props;
        let route = '/login';
        console.log(user)
        if(user)  route = `/profile/${user._id}` ;
        return(
           
         <div>
            <Link to={route}>{user.username}
               <h1>{genero}</h1>
               <p>{description}</p>
            </Link>
         </div>
            
       
            
        )
    }
}
