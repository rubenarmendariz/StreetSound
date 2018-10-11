import React from 'react';
import SingleProfile from '../components/SingleProfile';
import AddPhotoPrueba from '../components/AddPhotoPrueba';
import Show from '../components/AddShow';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {

        return (
            <div>
                <Show/>
                {/* <AddPhotoPrueba />
                <h1>holaaaaa</h1>
                <SingleProfile /> */}
            </div>
        )
    }
}