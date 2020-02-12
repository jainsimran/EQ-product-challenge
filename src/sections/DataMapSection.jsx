// import React, { Component } from 'react';
// import { fetchPoiAllMetrics } from '../apis/product';
// import MapContainer from '../components/Map';

// export default class DataMapSection extends Component {
//     constructor() {
//         super();
//         this.state = {
//             poi: []
//         }
//     }

//     componentDidMount() {
//         fetchPoiAllMetrics()
//             .then(data => {
//                 let poiData = [];
//                 data.forEach((element) => {
//                     poiData.push({
//                         id: element.poi_id,
//                         name: element.name,
//                         lat: element.lat,
//                         lng: element.lon,
//                         impressions: element.impressions,
//                         clicks: element.clicks,
//                         revenue: element.revenue
//                     })
//                 });
//                 this.setState({
//                     poi: poiData
//                 })
//                 console.log(poiData);
//             })

//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <section className='cardEffect'>
//                     <MapContainer poiData={this.state.poi}  />
//                 </section>
//             </React.Fragment>

//         )
//     }
// }
