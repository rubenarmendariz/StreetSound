import React from 'react';
import axios from 'axios';
import ShowPhotos from'../components/Photos/ShowPhotos';
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
                     <img width="300" height="300" src={this.state.user.PicProfilePath} alt="foto de perfil" />
                     <h1>Este es el perfil del artistaaaaa {this.state.user.username}</h1>
            <ShowPhotos {...this.state.user}></ShowPhotos>
            <ShowVideoList {...this.state.user} /><p>add video</p>

                {/* <div className="profile-component">
                     <img width="300" height="300" src={this.state.user.PicProfilePath} alt="foto de perfil" />
                     <h1>Este es el perfil del artistaaaaa {this.state.user.username}</h1>
                    <VideoList {...this.state.user} /><p>add video</p>
                     <PhotoList {...this.state.user} /><p>add photo list</p>
                     <CardPhoto {...this.state.user} /> */}
                    {/* <User/>
                <SingleProfile {...this.state.user}/>   */}
            </div>
            </div>
                : <p>Loading...</p>
        )
    }
}
