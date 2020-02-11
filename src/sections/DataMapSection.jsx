import React, { Component } from 'react';
import { fetchPoiData } from '../apis/product';
import MapContainer from '../components/Map';

export default class DataMapSection extends Component {
    constructor() {
        super();
        this.state = {
            poi: []
        }
    }

    componentDidMount() {
        fetchPoiData()
            .then(data => {
                let poiData = [];
                data.forEach((element) => {
                    poiData.push({
                        id: element.poi_id,
                        name: element.name,
                        lat: element.lat,
                        lon: element.lon
                    })
                });
                this.setState({
                    poi: poiData
                })
                console.log(poiData);
            })

    }

    render() {
        return (
            <React.Fragment>
                <section className='cardEffect'>
                    <MapContainer poi={this.state.poi}  />
                </section>
            </React.Fragment>

        )
    }
}
