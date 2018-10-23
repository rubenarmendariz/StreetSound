import React, { Component } from 'react';
import PhotoProfile from './api';

class CardPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.photo = new PhotoProfile();
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
      <div className="form-group">
        
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button  class="button is-success"  type="submit">Save new profile picture</button>
        </form>
      </div>
    );
  }
}

export default CardPhoto;

