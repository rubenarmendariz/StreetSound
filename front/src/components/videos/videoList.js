import React from 'react';
import { CardVideo } from './cardVideo';
import axios from 'axios';
import AuthService from '../../auth/AuthService';




export default class VideoList extends React.Component {
    constructor() {
        super();
        this.state = {
            videoList: null,
        }
        this.service = new AuthService();
    }


    createNewVideo = (event) => {
        event.preventDefault();
        const video = this.state.url;
        this.service.newVideo(video)
            .then(res => {
            })
    }

    // componentWillMount() {
    //     this.fetchVideos();
    // }

    // fetchVideos() {

    //     axios.get(`http://localhost:3000/api/artist/profile/${this.props.userId}`)
    //         .then(arr => {
    //             console.log(arr)
    //             this.setState({ videoList: arr.data })
    //         })
    //         .catch(e => console.log(e));
    // };


    render() {


        return (


            <div>
                {this.props.addVideo.map(video => <CardVideo {...video} key={video._id} url={video} />)}
                <form onSubmit={this.createNewVideo}>
                    <div><button type="submit">Submit</button></div>
                    <input type="text" name="linkVideo" onChange={e => this.setState({ url: e.currentTarget.value })} />
                </form>
            </div>
        )
    }
}