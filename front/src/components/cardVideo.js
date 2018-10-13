import React from 'react'

export const CardVideo = (props) => {
    console.log(props.url, "URL")
return (
    <div>
        <iframe width="360" height="215" src={props.url} frameborder="1" allow="autoplay; encrypted-media" allowfullscreen />
    </div>

)
}
