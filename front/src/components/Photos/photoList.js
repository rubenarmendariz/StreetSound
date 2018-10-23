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
    var el = document.getElementsByClassName('modal')
    return (
      <div className="profile-component">
        
        
        {/* {this.props.addPhoto.map(photo => <CardPhotoList {...photo} key={photo._id} url={photo} />)} */}
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <footer className="modal-card-foot">
        <button type="submit" value="login" onClick={() => el[3].classList.toggle('is-active')} class="button is-success">Save changes</button>
        <button onClick={() => el[3].classList.toggle('is-active')} className="button">Cancel</button>
      </footer>
        </form>
      </div>
    );
  }
}

export default PhotoList;




