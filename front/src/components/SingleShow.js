import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleProfile extends Component {
   constructor(props){
       super(props)
   }

    render() {
        console.log(this.props)
        let {user,description,genero} = this.props;
        console.log("User-------------------------------------"+ user._id)
        // let route = `/profile/${user._id}`;
    // let { name, email} = this.props;
        return(
            <div>
                <Link to={`/profile/${this.props.user._id}`}>{user.username}</Link>
                {/* <h1>{user.username}</h1> */}
               <h1>{genero}</h1>

                   
                   
{/*         
                <h1>{name}</h1>
                <h2>{email}</h2> */}
               
            </div>
        )
    }
}
