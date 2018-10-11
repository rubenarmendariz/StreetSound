import React from 'react';

export default class SingleProfile extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
    let { username, email} = this.props;
        return(
            <div>
               
                   
                   
        
                <h1>{username}</h1>
                <h2>{email}</h2>
               
            </div>
        )
    }
}
