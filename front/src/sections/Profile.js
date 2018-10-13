import React from 'react';
import axios from 'axios';
import SingleProfile from '../components/SingleProfile';
import AddButton from "../components/addPhoto";
import EditButton from "../components/editButton"
import DeleteButton from "../components/deleteButton"
import AddPhotoPrueba from '../components/AddPhotoPrueba';
import Show from '../components/AddShow';
import SelectGenero from '../components/genereButton'
import VideoList from '../components/videoList';
import User from '../components/editPrueba';
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }
    };
    render() {

        return (

            <div>

                <img src="#" alt="foto de perfil" />

                <h1>Este es mi Perfil</h1>
                <SingleProfile />
                <AddButton /><p>add video</p>
                <AddButton /><p>add photo</p>
                <AddButton /><p>add event</p>
                {/* <EditButton /> */}
                <DeleteButton />
                <Show/>
                 <AddPhotoPrueba />
                <h1>holaaaaa</h1>
                <SingleProfile /> 
                <SelectGenero />
                <User />
                <VideoList userId="this.props.match"></VideoList>
                <iframe width="360" height="215" src="https://www.youtube.com/embed/o_aJjLXY-HU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                {/* <SingleProfile />  */}
            </div>
        )
    }
}