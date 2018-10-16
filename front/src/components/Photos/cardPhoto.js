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
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
        
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Save new profile picture</button>
        </form>
      </div>
    );
  }
}

export default CardPhoto;


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


// export default class CardPhoto extends Component {
   

//     render() {
//         let {addPhoto, _id} = this.props;
//         let route = `/profile/${_id}`;
//         return(
//             <div>
//                 <Link to={route}>{addPhoto}<img src={image_url} alt={name} className="beer-img mx-3"></img></Link>
                
               
                   
                   

               
//             </div>
//         )
//     }
// }