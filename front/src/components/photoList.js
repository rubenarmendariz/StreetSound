import React from 'react';
import { CardVideo } from '../components/cardVideo';
import axios from 'axios';
import AuthService from '../auth/AuthService';




export default class PhotoList extends React.Component {
    constructor() {
        super();
        this.state = {
            photoList: null,
        }
        this.service = new AuthService();
    }


    createNewPhoto = (event) => {
        event.preventDefault();
        const photo = this.state.url;
        this.service.newPhoto(photo)
            .then(res => {
            })
    }

    // componentWillMount() {
    //     this.fetchPhotos();
    // }

    // fetchPhotos() {

    //     axios.get(`http://localhost:3000/api/artist/profile/${this.props.userId}`)
    //         .then(arr => {
    //             console.log(arr)
    //             this.setState({ PhotoList: arr.data })
    //         })
    //         .catch(e => console.log(e));
    // };


    render() {
        this.fetchPhotos();
        
        return (

            this.state.PhotoList ?
                <div>
                    {this.state.photoList.map(photo => <CardVideo {...photo} key={photo._id} />)}
                </div>

                :
                
                <form onSubmit={this.createNewPhoto}>
                    <div><button type="submit">Submit</button></div>
                    <input type="text" name="linkPhoto" onChange={e => this.setState({ url: e.currentTarget.value })} />
                </form>
        )
    }
}