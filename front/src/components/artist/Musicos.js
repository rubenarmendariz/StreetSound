import React, { Component } from 'react';
import axios from 'axios';
import MainMapBlock from '../GoogleMapReact'

export default class Musicos extends React.Component {
    constructor(){
        super();
        this.state = {
            artistList:[]
        }
    }
    componentWillMount(){
        this.fetchArtist();
    }

    fetchArtist(){
        axios.get('http://localhost:3000/api/artist/musicos')
        .then(arr => console.log(arr.data))
        // console.log(this.setState)
        .catch(e => console.log(e));
    }
    render(){
        return(
            <div>
                <MainMapBlock></MainMapBlock>
       
                <h1>hola</h1>
            </div>
        )
    }
}