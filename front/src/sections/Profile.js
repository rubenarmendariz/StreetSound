import React from 'react';
// import axios from 'axios';
import SingleProfile from '../components/SingleProfile';
import AddButton from "../components/addPhoto";
import EditButton from "../components/editButton"
import DeleteButton from "../components/buttons/deleteButton"
// import AddPhotoPrueba from '../components/AddPhotoPrueba';
import Show from '../components/AddShow';
import SelectGenero from '../components/genereButton'
import VideoList from '../components/videoList';
import User from '../components/editPrueba';
import CardPhoto from '../components/cardPhoto';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: []
            

        }
    };
    render() {
        return (
            <div>
                <img src="#" alt="foto de perfil" />
                <h1>Este es mi Perfil</h1>
                <SingleProfile />
                <VideoList /><p>add video</p>
                <AddButton /><p>add photo</p>
                <AddButton /><p>add event</p>
                <EditButton />
                <DeleteButton />
                <Show/>
                <CardPhoto />
                <h1>holaaaaa</h1>
                <SingleProfile /> 
                <SelectGenero />
                <VideoList></VideoList>
                <User></User>
                {/* <SingleProfile />  */}
            </div>
        )
    }
}