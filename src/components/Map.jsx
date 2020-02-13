import React, { useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from "use-supercluster";
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;

export default function MapContainer() {

  const url = "http://localhost:5555/join/poi/stats_hourly";

  const { data, error } = useSwr(url, { fetcher });

  const poiData = data && !error ? data.slice(0, 2000) : [];

  const points = poiData.map(poi => ({
    type: "points of intrest",
    properties: { cluster: false, id: poi.poi_id, name: poi.name },
    geometry: {
      type: "Point",
      coordinates: [
        poi.lon,
        poi.lat
      ]
    }
  })
  )

  const mapRef = useRef();

  const [bounds, setBounds] = useState(null);

  const [zoom, setZoom] = useState(10);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  

  return (
    <div style={{ height: "50vw", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `AIzaSyCk79ODgAFqY9di7oVX5Zh_zdIyecxZvks`,
          language: 'en'
        }}

        defaultCenter={{ lat: 43.6708, lng: -79.3899 }}
        defaultZoom={2}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}

        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >

        {clusters.map(cluster => {
          const displayData = (selectedLabel) => {
            console.log('selectedLabel');
          }
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
                onClick={displayData}
              >
                <div className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`poi-${cluster.properties.poiId}`}
              lat={latitude}
              lng={longitude}
              onClick={displayData}
            >
              <button className='event-marker'>
                <img src="../imgs/poi.svg" alt="" />
              </button>
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}