import React from 'react';
import { CardVideo } from '../components/cardVideo';
import axios from 'axios';
import AddButton from "../components/addPhoto";
import AuthService from '../auth/AuthService';




export default class VideoList extends React.Component {
    constructor() {
        super();
        this.state = {
            videoList: null,
            url: ""
        }
        this.service = new AuthService();
    }


    createNewVideo = (event) => {
        event.preventDefault();
        const video = this.state.url;
        console.log(video)

        this.service.newVideo(video)
            .then(res => {
                console.log(res.videos)
                //this.setState({ videoList: res.videos })
                //console.log(res)
            })
    }

    componentWillMount() {
        this.fetchVideos();
    }

    fetchVideos() {

        axios.get(`http://localhost:3000/api/artist/profile/${this.props.userId}`)
            .then(arr => {
                console.log(arr)
                this.setState({ videoList: arr.data })
            })
            .catch(e => console.log(e));
    };

    // searchVideo = (input) => {
    //     if(this.state.input !== ""){
    //         axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${input}`)
    //         .then(filter => this.setState({videoList: filter.data}))
    //         .catch(e => console.log(e))
    //     }
    // }

    render() {
        
        this.fetchVideos();
        console.log(this.state.url)
        return (
            this.state.videoList ?
                <div>
                    {this.state.videoList.map(video => <CardVideo {...video} key={video._id} url={video} />)}
                </div>
                : 
                <form onSubmit={this.createNewVideo}>
                <div><button type="submit">Submit</button></div> 
                <input type="text" name="linkVideo" onChange={e => this.setState({url: e.currentTarget.value})}/>
                
                </form>
        )
    }
}