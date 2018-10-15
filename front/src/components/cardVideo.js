import React from 'react'

export const CardVideo = (props) => {
    console.log(props.url, "URL")
return (
    <div>
       <iframe width="560" height="315" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>

)
}
