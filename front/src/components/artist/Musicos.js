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
    // searchArtist = (input) => {
    //     if(this.state.input !== ""){
    //         axios.get(`https://localhost:3000/api/artist/musicos?q=${input}`)
    //         .then(artist => console.log(artist))
    //         // .then(artist => this.setState({artistList: artist.data}))
    //         .catch(e => console.log(e))
    //     }
    // }

//      search(val) {
//          console.log('pepe')
//     let filter = artistList.filter(e => {
//       return e.name.toLowerCase().includes(val);
//     });
//     this.setState({ products: filter });
//   }


search(val) {
    let filter = this.state.artistList.filter(e => {
      return e.username.toLowerCase().includes(val);
    });
    this.setState({ artistList: filter });
  }


  render(){
        return(
            <div>
               {/* <SearchBar
            search={e => this.search(e)}
          /> */}
                {/* <input type="text" name="search" onChange={e => this.search(e.currentTarget.value)}></input> */}
                 {/* <SimpleMap></SimpleMap>  */}
                {/* {this.state.artistList.map(artist => <SingleProfile {...artist} key={artist._id}></SingleProfile>)}
                <h1>hola</h1> */}

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
                 {/* <div className="list-group-item list-group-item-action">
                  holaaaaaa
                  </div> ------------PREGUNTAR DIEGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO}
                  {/*<Link to={"/country/" + country.cca3}>
                    <div>
                      <span>{country.flag}</span>
                      {country.name.common}
                    </div>
                  </Link>
                </div> 
              {/* ))} */}
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