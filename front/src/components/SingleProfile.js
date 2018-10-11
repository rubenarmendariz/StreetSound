import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleProfile extends Component {
   

    render() {
        let {username,email, _id} = this.props;
        let route = `/profile/${_id}`;
    // let { name, email} = this.props;
        return(
            <div>
                <Link to={route}>{username}</Link>
                
               <h1>{email}</h1>
                   
                   
{/*         
                <h1>{name}</h1>
                <h2>{email}</h2> */}
               
            </div>
        )
    }
}

    