import React from 'react';
import axios from 'axios';
import ShowPhotos from '../components/Photos/ShowPhotos';
import ShowVideoList from '../components/videos/showVideoList'


import '../sections/MyProfile.scss';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            videoList: []
        }
    };

    componentWillMount() {
        this.fetchProfile();
    }

    fetchProfile() {

        axios.get(`http://localhost:3000/api/artist/profile/${this.props.match.params.id}`)
            .then(arr => {
                this.setState({ user: { ...arr.data } })
            })
            .catch(e => console.log(e));
    };




    render() {
        return (
            this.state.user ?

                <div className="container-Profile">
                    <div className="profile-component">
                        <div className="name-profile"><img width="300" height="300" className="Profile-photo" src={this.state.user.PicProfilePath} alt="foto de perfil" />
                            <h1 className="artist">{this.state.user.username}</h1></div>
                        <h1>Fotos</h1>
                        <ShowPhotos  {...this.state.user}></ShowPhotos>
                        <h1>Videos</h1>
                        <ShowVideoList className='video-holder' {...this.state.user} />

                    </div>
                </div>
                : <p>Loading...</p>
        )
    }
}
