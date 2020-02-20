import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './imgs/logo.png'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
import Navbar from './components/Navbar';
import DataChartSection from './sections/DataChartSection';
import DataTableSection from './sections/DataTableSection';
import DataMapSection from './sections/DataMapSection';
import HomepageSection from './sections/HomePageSection';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('dcd');
  }
  render() {
    return (<Router>
      <section className='contentWrapper'>
        <Navbar {...this.props}/>
        <section>
          <Route exact path="/" component={HomepageSection} />
          <Route exact path="/chart" component={DataChartSection} />
          <Route path="/table" component={DataTableSection} />
          <Route path="/map" component={DataMapSection} />
        </section>
      </section>
    </Router>);
  }
}