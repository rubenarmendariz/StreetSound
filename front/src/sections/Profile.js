import React from 'react';
import axios from 'axios';
// import SingleProfile from '../components/SingleProfile';
// import AddPhotoPrueba from '../components/AddPhotoPrueba';
import VideoList from '../components/videos/videoList';
// import User from '../components/edit/editPrueba';
// import CardPhoto from '../components/Photos/cardPhoto';
import PhotoList from '../components/Photos/photoList'

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            user:null,
            videoList: []
        }
    };

    componentWillMount() {
        this.fetchProfile();
    }

    fetchProfile() {

        axios.get(`http://localhost:3000/api/artist/profile/${this.props.match.params.id}`)
            .then(arr => {
                console.log(arr.data)
                this.setState({user: {...arr.data} })
            })
            .catch(e => console.log(e));
    };




    render() {
        console.log(this.props);
        return (
            this.state.user ? 
            <div>
                <img width="300" height="300" src={this.state.user.PicProfilePath} alt="foto de perfil" />
                <h1>Este es el perfil del artistaaaaa {this.state.user.username}</h1>
                <VideoList {...this.state.user} /><p>add video</p>
                <PhotoList {...this.state.user} /><p>add photo list</p>
                {/* <CardPhoto {...this.state.user}/>
                <User/>
                <SingleProfile {...this.state.user}/>  */}
            </div>
            : <p>Loading...</p>
        )
    }
}