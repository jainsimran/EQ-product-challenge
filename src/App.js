import React, { Component } from 'react';
import DataChartSection from './sections/DataChartSection';
import DataTableSection from './sections/DataTableSection';
import DataMapSection from './sections/DataMapSection';
// import SwitchDataSection from './sections/SwitchDataSection';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <SwitchDataSection /> */}
        <DataChartSection/>
        <DataTableSection/>
        <DataMapSection/>
      </div>
    )
  }
}
