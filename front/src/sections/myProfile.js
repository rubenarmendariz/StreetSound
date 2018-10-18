import React from 'react';
import axios from 'axios';
import SingleProfile from '../components/SingleProfile';
import AddButton from "../components/shows/addPhoto";
import EditButton from "../components/edit/editButton"
import DeleteButton from "../components/buttons/deleteButton"
// import AddPhotoPrueba from '../components/AddPhotoPrueba';
import Show from '../components/shows/AddShow';
import SelectGenero from '../components/shows/genereButton'
import VideoList from '../components/videos/videoList';
import User from '../components/edit/editPrueba';
import CardPhoto from '../components/Photos/cardPhoto';
import PhotoList from '../components/Photos/photoList'

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
                <VideoList {...this.props.userInSession} /><p>add video</p>
                <PhotoList {...this.props.userInSession} /><p>add photo list</p>
                <AddButton /><p>add photo</p> 
                {/* <AddButton /><p>add event</p> */}
                <EditButton />
                

                <DeleteButton />
                {/* <Show/> */}
                <CardPhoto {...this.props.userInSession}/>
               
                <SelectGenero />
                
                <User/>
                {/* <SingleProfile {...this.props.userInSession}/>  */}
            </div>
            // : <p>Loading...o queee</p>
        )
    }
}
