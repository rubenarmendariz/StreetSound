

import React, { Component } from 'react';


export const Marker = props => {
    // _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)
    // // ES5 users
    // function _onClick(obj){ console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);}
    //console.log(props)
    return <div   className="Marker"><img src='http://maps.google.com/mapfiles/ms/icons/red-dot.png' alt="ALT"/>
            </div>
  }