import React, { Component } from 'react';
import DataChartSection from './sections/DataChartSection';
import DataTableSection from './sections/DataTableSection';

export default class App extends Component {
  render() {
    return (
      <div>
        <DataChartSection />
        <DataTableSection />
      </div>
    )
  }
}
