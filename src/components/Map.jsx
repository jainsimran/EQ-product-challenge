import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 43.6708,
        lng: -79.3899
      },
      zoom: 10
    }
  }

  render() {

    const Marker = () => {
      return (
        <section className='labelMaker'> </section>
      );
    }


    const Poimarker = () => {
      return (
        <section style={{ height: '85vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `AIzaSyCk79ODgAFqY9di7oVX5Zh_zdIyecxZvks` }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            {
              this.props.data.map((item, idx) => {
                return (
                  <Marker
                    key={idx}
                    lat={item.lat}
                    lng={item.lng}
                    title={item.name}
                  >
                  </Marker>
                );
              })
            }
          </GoogleMapReact>
        </section>
      );
    }

    console.log(this.props.data);
    return (
      <section>
        <Poimarker />
      </section>
    );
  }
}














// import React, { useRef, useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// import useSupercluster from "use-supercluster";
// import useSwr from "swr";

// const fetcher = (...args) => fetch(...args).then(response => response.json());

// const Marker = ({ children }) => children;

// export default function MapContainer() {

//   const url = "http://localhost:5555/join/poi/stats_hourly";

//   const { data, error } = useSwr(url, { fetcher });

//   const poiData = data && !error ? data.slice(0, 2000) : [];

//   const points = poiData.map(poi => ({
//     type: "points of intrest",
//     properties: {
//        cluster: false, 
//        id: poi.poi_id, 
//        name: poi.name,
//        impressions: poi.impressions,
//        revenue: poi.revenue
//       },
//     geometry: {
//       type: "Point",
//       coordinates: [
//         poi.lon,
//         poi.lat
//       ]
//     }
//   })
//   )

//   const mapRef = useRef();

//   const [bounds, setBounds] = useState(null);

//   const [zoom, setZoom] = useState(10);

//   const { clusters, supercluster } = useSupercluster({
//     points,
//     bounds,
//     zoom,
//     options: { radius: 75, maxZoom: 20 }
//   });

//   return (
//     <section style={{ height: "50vw", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: `AIzaSyCk79ODgAFqY9di7oVX5Zh_zdIyecxZvks`,
//           language: 'en'
//         }}

//         defaultCenter={{ lat: 43.6708, lng: -79.3899 }}
//         defaultZoom={10}
//         yesIWantToUseGoogleMapApiInternals
//         onGoogleApiLoaded={({ map }) => {
//           mapRef.current = map;
//         }}

//         onChange={({ zoom, bounds }) => {
//           setZoom(zoom);
//           setBounds([
//             bounds.nw.lng,
//             bounds.se.lat,
//             bounds.se.lng,
//             bounds.nw.lat
//           ]);
//         }}
//       >

//         {clusters.map(cluster => {
//           const [longitude, latitude] = cluster.geometry.coordinates;
//           const {
//             cluster: isCluster,
//             point_count: pointCount
//           } = cluster.properties;

//           if (isCluster) {
//             return (
//               <Marker
//                 key={`cluster-${cluster.id}`}
//                 lat={latitude}
//                 lng={longitude}
//               >
//                 <section className="cluster-marker"
//                   style={{
//                     width: `${10 + (pointCount / points.length) * 20}px`,
//                     height: `${10 + (pointCount / points.length) * 20}px`
//                   }}
//                   onClick={() => {
//                     const expansionZoom = Math.min(
//                       supercluster.getClusterExpansionZoom(cluster.id),
//                       20
//                     );
//                     mapRef.current.setZoom(expansionZoom);
//                     mapRef.current.panTo({ lat: latitude, lng: longitude });
//                   }}
//                 >
//                   {pointCount}
//                 </section>
//               </Marker>
//             );
//           }

//           return (
//             <Marker
//               key={`poi-${cluster.properties.poiId}`}
//               lat={latitude}
//               lng={longitude}
//             >
//               <button className='event-marker'  
//               onClick={
//                 (() => {console.log(`poi-${cluster.properties.name}`)})
//                 }>

//                 <section className="labelMaker"> </section>
//               </button>
//             </Marker>
//           );
//         })}
//       </GoogleMapReact>

//     </section>
//   );
// }