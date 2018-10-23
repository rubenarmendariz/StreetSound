import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SingleProfile extends Component {


    render() {
        let { user, description, genero, PicProfilePath } = this.props;

        return (

            <div className="artist">
                {this.props.userInSession ?
                    <h1><Link to={`/profile/${user._id}`} >{user.username} </Link></h1>
                    :
                    <Link to={'/login'}>{user.username}</Link>}

                <img src={PicProfilePath} alt="foto" />
                <h1>{genero}</h1>
                <p>{description}</p>
                <hr />
                {/* <p>{date}</p> */}

            </div>



        )
    }
}



