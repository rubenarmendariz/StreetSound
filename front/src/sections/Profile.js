import React from 'react';
import axios from 'axios';
import SingleProfile from '../components/SingleProfile';
import AddButton from "../components/addPhoto";
import EditButton from "../components/editButton"
import DeleteButton from "../components/deleteButton"
import AddPhotoPrueba from '../components/AddPhotoPrueba';
import Show from '../components/AddShow';

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
                <AddButton />
                <AddButton />
                <AddButton />
                <EditButton />
                <DeleteButton />
                <Show/>
                 <AddPhotoPrueba />
                <h1>holaaaaa</h1>
                <SingleProfile /> }

                <iframe width="560" height="315" src="https://www.youtube.com/embed/o_aJjLXY-HU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                {/* <SingleProfile />  */}
            </div>
        )
    }
}