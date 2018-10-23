import React from 'react';
import { CardVideo } from './cardVideo';
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
                console.log(res)
                this.props.AddVideo(res.videos);
            })
    }

  


    render() {
        var el = document.getElementsByClassName('modal')

        return (


            <div>
                {/* {this.props.addVideo.map(video => <CardVideo {...video} key={video._id} url={video} />)} */}
                <form onSubmit={this.createNewVideo}>
                    {/* <div><button type="submit">Submit</button></div> */}
                    <input type="text" name="linkVideo" onChange={e => this.setState({ url: e.currentTarget.value })} />
                    <footer className="modal-card-foot">
        <button type="submit" value="login" onClick={() => el[2].classList.toggle('is-active')} class="button is-success">Save changes</button>
        <button onClick={() => el[2].classList.toggle('is-active')} className="button">Cancel</button>
      </footer>
                </form>
            </div>
        )
    }
}