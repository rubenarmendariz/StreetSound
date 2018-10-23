import React, { Component } from 'react';
import axios from 'axios';
import SingleShow from '../shows/SingleShow';
import Map from '../maps/Map'
import Select from 'react-select';
import { genero } from './genero';


export default class Musicos extends Component {
    constructor() {
        super();
        this.state = {
            showList: [],
            copy: []

        }
    }
    componentWillMount() {
        this.fetchArtist();
    }

    fetchArtist() {
        axios.get('http://localhost:3000/api/artist/musicos')
            .then(shows => this.setState({ showList: shows.data, copy: shows.date }))
            .catch(e => console.log(e));
    }




    search(val) {
        console.log(val)
        // let copy= this.S
        let filter = this.state.showList.filter(e => {
            return e.genero.toLowerCase().includes(val.toLowerCase());
        });
        this.setState({ showList: filter });
    }


    render() {
        return (
            <div className="container">
                <div className="list-group">
                    <span className="list-group-item list-group-item-action active colorSelect">
                        <Select showList={this.props}

                            isMulti
                            name="generos"
                            options={genero}
                            //    onChange={e => prop.search(e.target.value)
                            onChange={e => e[0] ? this.search(Object.values(e[0])[0]) : this.search("")}
                            // .search(Object.values(e[0]))}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        // styles={colourStyles}
                        />
                    </span>
                    <div className="row map-container">
                        <div className="col-4 pre-scrollable" style={{ maxHeight: "96vh" }}>

                            {this.state.showList.map(show => <SingleShow userInSession={this.props.userInSession}{...show} key={show._id}></SingleShow>)}

                        </div>
                        <div className="col-8">
                            <Map showLocations={this.state.showList} /> {/* <Route path="/country/:cca3" component={CountryDetail} /> */}
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}