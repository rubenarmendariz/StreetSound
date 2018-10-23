import React from 'react';
import axios from 'axios';
import AddButton from "../components/shows/addButtonShow";
import EditButton from "../components/edit/editButton"
import DeleteButton from "../components/buttons/deleteButton"
import AddButtonPhotos from '../components/Photos/addButtonPhotos';
import AddButtonVideo from '../components/videos/addButtonVideos';
import ShowPhotos from '../components/Photos/ShowPhotos';
import ShowVideoList from '../components/videos/showVideoList'
export default class MyProfile extends React.Component {
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
        console.log("entra")
        axios.get('http://localhost:3000/api/myprofile')
            .then(arr => {
                this.setState({ user: { ...arr.data } })
            })
            .catch(e => console.log(e));
    };




    render() {
        console.log(this.props.userInSession);
        return (
            // this.state.user ? 
            <div className="container-Profile">
                <div className="profile-component">
                <div className="name-profile">
                <p>Add show</p>
                <AddButton />
                <h1>{this.props.userInSession.username}</h1>
                <img width="300" height="300" src={this.props.userInSession.PicProfilePath} alt="foto de perfil" className=" Profile-photo photo-myprofile" />
                <h1>{this.props.userInSession.username}</h1><EditButton /><p>Edit button</p>
                </div>
                <AddButtonVideo pepe={(newVideoList) => this.props.updateVideo(newVideoList)}/><ShowVideoList {...this.props.userInSession} />
                <AddButtonPhotos tomas={(newPhotoList) => this.fetchProfile(newPhotoList)}/><ShowPhotos {...this.props.userInSession} />
            
            
           </div>
            </div>
            
            // : <p>Loading...o queee</p>
        )
    }
}
