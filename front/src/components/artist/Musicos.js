import React, { Component } from 'react';
import axios from 'axios';
// import SimpleMap from './../GoogleMapReact';
import SingleProfile from '../SingleProfile';
 import SearchBar from "../SearchBar";
//  import MyMap from "../maps/MyMap";
 import SimpleMap from "../GoogleMapReact";
 import SingleShow from '../SingleShow';
 import Map from '../Map'

//  import SimpleMap from '../maps/Map';
import { Redirect} from 'react-router-dom';
 

export default class Musicos extends Component {
    constructor(){
        super();
        this.state = {
            showList:[],
            
            
        }
    }
    componentWillMount(){
        this.fetchArtist();
    }

    fetchArtist(){
        axios.get('http://localhost:3000/api/artist/musicos')
        .then(shows => this.setState({showList: shows.data}))
        // console.log(this.setState)
        .catch(e => console.log(e));



        
    }
    
   


search(val) {
    let filter = this.state.showList.filter(e => {
      return e.genero.toLowerCase().includes(val);
    });
    this.setState({ showList: filter });
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
            
            {this.state.showList.map(show => <SingleShow {...show} key={show._id}></SingleShow>)}
                 
            </div>
            <div className="col-8">
            <Map showLocations={this.state.showList}/> {/* <Route path="/country/:cca3" component={CountryDetail} /> */}
            </div>
          </div>
        </div>
      </div>
            </div>
           
        
        )
    }
}