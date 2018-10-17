import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleProfile extends Component {
  

    render() {
        let {user,description,genero} = this.props;
      
        return(
           
         <div>
             {this.props.userInSession ? 
            <Link to={`/profile/${user._id}`} >{user.username} </Link>
            :
            <Link to ={'/login'}>{user.username}</Link>}
               <h1>{genero}</h1>
               <p>{description}</p>
            
         </div>
            
       
            
        )
    }
}
