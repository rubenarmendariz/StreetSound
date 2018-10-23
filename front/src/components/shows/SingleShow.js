import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleProfile extends Component {


    render() {
        let { user, description, genero } = this.props;

        return (

            <div className="artist">
                {this.props.userInSession ?
                    <h1 className="user-list"><Link to={`/profile/${user._id}`} >{user.username} </Link></h1>
                    :
                    <Link to={'/login'}>{user.username}</Link>}
                    <div> <img width="150px" src={user.PicProfilePath} alt="photo"/>
               
                <h1 className="genero-list">{genero}</h1>
                <p className="description-list">{description}</p></div>
                
                {/* <p>{date}</p> */}
                <hr className="hr"/>
            </div>



        )
    }
}



