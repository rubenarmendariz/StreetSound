import React from 'react';
import { CardVideo } from '../components/cardVideo';
import axios from 'axios';

export default class VideoList extends React.Component {
    constructor() {
        super();
        this.state = {
            videoList: null,
        }
    }


    createNewVideo() {
        axios.post('http://localhost:3000/api/artist/newvideo', this.state)
            .then((res) =>
                /*window.location.replace('http://localhost:3000/')*/
                this.setState({ videoList: res.data.videos }))
            .catch(e => console.log(e))
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
        return (
            this.state.videoList ?
                <div>

                    {/* <input type="text" name="search" onChange={e => this.searchVideo(e.currentTarget.value)}></input> */}
                    {this.state.videoList.map(video => <CardVideo {...video} key={video._id} url={video} />)}
                </div>
                : <p>Loading...</p>
        )
    }
}