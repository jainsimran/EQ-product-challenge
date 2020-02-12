import React, { Component } from 'react';
import DataChartSection from './sections/DataChartSection';
import DataTableSection from './sections/DataTableSection';
import MapContainer from './components/Map';

export default class App extends Component {
  render() {
    return (
      <section>
        <DataChartSection/>
        <DataTableSection/>
        <MapContainer />
      </section>
    )
  }
}
