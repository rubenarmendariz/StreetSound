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
      <div className="profile-component ">
        
        <p>listado de foto</p>
        {this.props.addPhoto.map(photo => <CardPhotoList {...photo} key={photo._id} url={photo} />)}
        {/* <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Save new picture</button>
        </form> */}
      </div>
    );
  }
}

export default PhotoList;