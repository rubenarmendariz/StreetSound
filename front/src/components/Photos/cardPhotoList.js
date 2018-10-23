import React from 'react'
import '../../sections/MyProfile.scss' 
export const CardPhotoList = (props) => {
    return (
        
        
<div className="container">

<div className="gallery">

    <div className="gallery-item" tabindex="0">
    <img  width="200" height="200" src={props.url} alt="photolist" />
    </div>
</div>
</div>
        

    )
}
