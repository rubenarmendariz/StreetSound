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
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import {genero} from'./genero';
// import {colourStyles} from './style'
export default class Musicos extends Component {
    constructor() {
        super();
        this.state = {
            showList: [],
             copy:[]

        }
    }
    componentWillMount() {
        this.fetchArtist();
    }

    fetchArtist() {
        axios.get('http://localhost:3000/api/artist/musicos')
            .then(shows => this.setState({ showList: shows.data ,copy:shows.date}))
            // console.log(this.setState)
            .catch(e => console.log(e));




    }




    search(val) {
        console.log(val)
        // let copy= this.S
        let filter = this.state.showList.filter(e => {
            console.log(e.genero)
            return e.genero.toLowerCase().includes(val.toLowerCase());
        });
        this.setState({ showList: filter });
    }


    render() {
        console.log(genero)
        return (


            <div>
                <div className="container border">
                    <div className="list-group">
                        <span className="list-group-item list-group-item-action active colorSelect">
                            {/* <SearchBar
            search={e => this.search(e)}
        /> */}      
                            <Select  showList={this.props}
                                
                                isMulti
                                name="generos"
                               options= {genero}
                            //    onChange={e => prop.search(e.target.value)
                               onChange={e => e[0]?this.search(Object.values(e[0])[0]) : this.search("")}
                                // .search(Object.values(e[0]))}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                // styles={colourStyles}
                            />
                        </span>
                        <div className="row">
                            <div className="col-4 pre-scrollable" style={{ maxHeight: "93vh" }}>

                                {this.state.showList.map(show => <SingleShow userInSession={this.props.userInSession}{...show} key={show._id}></SingleShow>)}

                            </div>
                            <div className="col-8">
                                <Map showLocations={this.state.showList} /> {/* <Route path="/country/:cca3" component={CountryDetail} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}