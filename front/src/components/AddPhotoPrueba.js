import React, { Component } from 'react';

class AddPhotoPrueba extends Component{
    constructor(props) {
        super(props)
        this.state = {
          file: null
        }
    }
    state = {
        selectedFile:null
    }
    filesSelectHandler = event=> {
 this.setState({selectedFile : event.target.files[0]})
    }

    filesUploadHandler = ()=>{
        axios.post
    }
    render(){
        return(
            <div>
            <input type = "file" onChange = {this.filesSelectHandler}/>
            <button onClick = {this.filesUploadHandler}>upload</button>
            </div>
        )
    }
}

export default AddPhotoPrueba;


