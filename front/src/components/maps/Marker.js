

import React, { Component } from 'react';


export const Marker = props => {
    // _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)
    // // ES5 users
    // function _onClick(obj){ console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);}
    //console.log(props)
    return <div   className="Marker"><img src='https://files.slack.com/files-tmb/T02CQ4EN4-FDGGG4GRM-eace7e122a/imagen_de_ios_720.jpg'style={{with:"20px" ,height:"40px"}} alt="ALT"/>
            </div>
  }