import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleProfile extends Component {
   
    constructor(props){
        super();
        this.props=props;
    }

    render() {
        let {username,email, _id} = this.props;
        console.log(this.props)
        let route = `/profile/${_id}`;
        if(this.props){
        return(
            <div>
                
                <Link to={route}>{username}</Link>
                
               <h1>{email}</h1>
                   
                   
            </div>
        )
    }else {
        return(<p>Loading...</p>)
    }
    }
}

    