import React, { Component } from 'react';
import ApiList from './apiList';
import { CardPhotoList } from './cardPhotoList';
import '../../sections/MyProfile.scss';

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
        
        
        <div className="photo-list">
        {this.props.addPhoto.map(photo => <CardPhotoList {...photo} key={photo._id} url={photo} />)}
        </div>
      </div>
    );
  }
}

export default PhotoList;