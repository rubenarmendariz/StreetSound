import React from 'react';
import axios from 'axios';
import SingleProfile from '../components/SingleProfile';
import AddButton from "../components/addPhoto";
import EditButton from "../components/editButton"
import DeleteButton from "../components/deleteButton"

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
            </div>
        )
    }
}