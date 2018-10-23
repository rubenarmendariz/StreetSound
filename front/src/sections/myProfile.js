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
            user:null,
            videoList: []
        }
    };

    componentWillMount() {
        this.fetchProfile();
    }

    fetchProfile() {

        axios.get('http://localhost:3000/api/myprofile')
            .then(arr => {
                this.setState({user: {...arr.data} })
            })
            .catch(e => console.log(e));
    };




    render() {
        console.log(this.props);
        return (
            // this.state.user ? 
            <div className="myprofile-component">   
                <img width="300" height="300"  src={this.props.userInSession.PicProfilePath} alt="foto de perfil" />
                <h1>Este es mi Perfil {this.props.userInSession.username}</h1>
                <ShowVideoList {...this.props.userInSession} /><p>add video</p>
                <ShowPhotos {...this.props.userInSession} /><p>add photo list</p>
                <AddButton /><p>add Show</p> 
                <EditButton />
                <p>add foto</p>
                <AddButtonPhotos></AddButtonPhotos>
                <p>add video</p>
                
                 <AddButtonVideo></AddButtonVideo>
                

                <DeleteButton />
            </div>
            // : <p>Loading...o queee</p>
        )
    }
}
