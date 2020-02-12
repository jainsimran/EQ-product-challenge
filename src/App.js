import React, { Component } from 'react';
import DataChartSection from './sections/DataChartSection';
import DataTableSection from './sections/DataTableSection';
import DataMapSection from './sections/DataMapSection';

export default class App extends Component {
  render() {
    return (
      <section>
        <DataChartSection/>
        <DataTableSection/>
        <DataMapSection />
      </section>
    )
  }
}
