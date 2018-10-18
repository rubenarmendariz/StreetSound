import React from 'react';
import axios from 'axios';
import SingleProfile from '../components/SingleProfile';
import AddButton from "../components/shows/addButtonShow";
import EditButton from "../components/edit/editButton"
import DeleteButton from "../components/buttons/deleteButton"
// import AddPhotoPrueba from '../components/AddPhotoPrueba';
import Show from '../components/shows/AddShow';
import SelectGenero from '../components/shows/genereButton'
import VideoList from '../components/videos/videoList';
import User from '../components/edit/editPrueba';
import CardPhoto from '../components/Photos/cardPhoto';
import PhotoList from '../components/Photos/photoList';
import AddButtonPhotos from '../components/Photos/addButtonPhotos';
import AddButtonVideo from '../components/videos/addButtonVideos';
import ShowPhotos from '../components/Photos/ShowPhotos';
import ShowVideoList from '../components/videos/showVideoList'
export default class MyProfile extends React.Component {
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

        axios.get('http://localhost:3000/api/myprofile')
            .then(arr => {
                console.log(arr.data)
                this.setState({user: {...arr.data} })
            })
            .catch(e => console.log(e));
    };




    render() {
        console.log(this.props);
        return (
            // this.state.user ? 
            <div>
                <img width="300" height="300"  src={this.props.userInSession.PicProfilePath} alt="foto de perfil" />
                <h1>Este es mi Perfil {this.props.userInSession.username}</h1>
                <ShowVideoList {...this.props.userInSession} /><p>add video</p>
                <ShowPhotos {...this.props.userInSession} /><p>add photo list</p>
                <AddButton /><p>add Show</p> 
                {/* <AddButton /><p>add event</p> */}
                <EditButton />
                <p>add foto</p>
                <AddButtonPhotos></AddButtonPhotos>
                <p>add video</p>
                
                 <AddButtonVideo></AddButtonVideo>
                

                <DeleteButton />
                {/* <Show/> */}
                {/* <CardPhoto {...this.props.userInSession}/> */}
               
                {/* <SelectGenero />
                
                <User/> */}
                {/* <SingleProfile {...this.props.userInSession}/>  */}
            </div>
            // : <p>Loading...o queee</p>
        )
    }
}
