import React from 'react'

export const CardVideo = (props) => {
    // console.log(props.url, "URL")    
    return (
        <div className="video-list">
            <iframe width="360" height="215" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

    )
}
