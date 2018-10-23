import React from 'react';
import { CardVideo } from './cardVideo';
import AuthService from '../../auth/AuthService';
import '../../sections/MyProfile.scss';



export default class ShowVideoList extends React.Component {
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

  


    render() {
        

        return (


            <div className="photo-list">
                {this.props.addVideo.map(video => <CardVideo {...video} key={video._id} url={video} />)}
                {/* <form onSubmit={this.createNewVideo}>
                    <div><button type="submit">Submit</button></div>
                    <input type="text" name="linkVideo" onChange={e => this.setState({ url: e.currentTarget.value })} />
                </form> */}
            </div>
        )
    }
}