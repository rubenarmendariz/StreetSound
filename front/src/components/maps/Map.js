import React from "react";

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: {},
            directionsService: {},
            directionsDisplay: {},
            center: {}
        };
    }

    componentDidMount = () => {
      
                const map = new window.google.maps.Map(document.getElementById("map"), {
                    center: {lat: 40.4582, lng: -3.6586 },
                    zoom: 15
                });
                var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the '+
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                'south west of the nearest large town, Alice Springs; 450&#160;km '+
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                'Aboriginal people of the area. It has many springs, waterholes, '+
                'rock caves and ancient paintings. Uluru is listed as a World '+
                'Heritage Site.</p>'+
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                '(last visited June 22, 2009).</p>'+
                '</div>'+
                '</div>';

                this.setState({map})
                var infowindow = new window.google.maps.InfoWindow({
                    content: contentString
                  });

            
    };

  
    componentDidUpdate() {
        const markersArray = this.props.showLocations;
        markersArray.forEach(e => {    
            new window.google.maps.Marker({
                position: {lat: e.location.coordinates[0], lng: e.location.coordinates[1]},
                map: this.state.map


            
            })

            
        })
    }

    render() {
        return <div style={{ width: "88vw", height: "96vh" }} id="map" />;
    }
}