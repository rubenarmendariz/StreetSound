import React, { Component } from 'react';
import ApiList from './apiList';
import { CardPhotoList } from './cardPhotoList';

class PhotoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.photo = new ApiList();
  }
  handleChange(e) {
    this.setState({
      file: e.target.files[0]
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.photo.addPicture(this.state.file)
  }

  render() {
    
    return (
      <div className="profile-component">
        
        <p>listado de foto</p>
        {/* {this.props.addPhoto.map(photo => <CardPhotoList {...photo} key={photo._id} url={photo} />)} */}
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Save new picture</button>
        </form>
      </div>
    );
  }
}

export default PhotoList;




//PRIMERA PRUEBA ADD PHOTO-BASE VIDEO LIST

// import React from 'react';
// import { CardPhotoList } from './cardPhotoList'
// import axios from 'axios';
// import AuthService from '../auth/AuthService';



// export default class PhotoList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             photoList: [],
//         }
//         this.service = new AuthService();
//     }


//     createNewPhoto = (event) => {
//         event.preventDefault();
//         const photo = this.state.id;
//         this.service.newPhoto(photo)
//             .then(res => {
//             })
//     }



//     render() {

//         return (

//             <div>
//                 {this.props.addPhoto.map(photo => <CardPhotoList {...photo} key={photo._id} id={photo} />)}
               
//                <form onSubmit={(e) => this.handleSubmit(e)}>
//                    <input type="file" onChange={(e) => this.handleChange(e)} /> <br />
//                    <button type="submit">Save new profile picture</button>
//                </form> 

//                 <form onSubmit={this.createNewPhoto}>
//                     <div><button type="submit">Submit</button></div>
//                     <input type="file" name="linkPhoto" onChange={e => this.setState({ id: e.currentTarget.value })} />
//                 </form>
//             </div>
//         )
//     }
// }
                         