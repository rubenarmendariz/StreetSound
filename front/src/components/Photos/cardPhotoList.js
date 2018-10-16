import React from 'react'

export const CardPhotoList = (props) => {
    console.log(props.id, "PHOTOOOOOOOSSS")
    return (
        <div>
            <img width="300" height="300" src={props.url} alt="photolist" />
        </div>

    )
}