import React, { Component } from 'react';
import axios from 'axios';
import SimpleMap from './../GoogleMapReact';
import SingleProfile from '../SingleProfile';
 import SearchBar from "../SearchBar";

export default class Musicos extends React.Component {
    constructor(){
        super();
        this.state = {
            artistList:[],
            
        }
    }
    componentWillMount(){
        this.fetchArtist();
    }

    fetchArtist(){
        axios.get('http://localhost:3000/api/artist/musicos')
        .then(users => this.setState({artistList: users.data}))
        // console.log(this.setState)
        .catch(e => console.log(e));



        
    }
   


search(val) {
    let filter = this.state.artistList.filter(e => {
      return e.username.toLowerCase().includes(val);
    });
    this.setState({ artistList: filter });
  }


  render(){
        return(
            <div>
              

                <div className="container border">
        <div className="list-group">
          <span className="list-group-item list-group-item-action active">
          <SearchBar
            search={e => this.search(e)}
          />
          </span>
          <div className="row">
            <div className="col-4 pre-scrollable" style={{maxHeight:"93vh"}}>
            
            {this.state.artistList.map(artist => <SingleProfile {...artist} key={artist._id}></SingleProfile>)}
                 
            </div>
            <div className="col-8">
            <SimpleMap/> {/* <Route path="/country/:cca3" component={CountryDetail} /> */}
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}