import React, { Component } from 'react';
import MapContainer from '../components/Map';

export default class DataMapSection extends Component {
    render() {
        return (
            <div  className='cardEffect'>
                <h1>Top 10 point of interests.</h1>
                <MapContainer />
            </div>
        )
    }
}
