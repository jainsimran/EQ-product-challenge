import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './imgs/logo.png'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import DataChartSection from './sections/DataChartSection';
import DataTableSection from './sections/DataTableSection';
import DataMapSection from './sections/DataMapSection';

const routing = (
  <Router>
    <section className='contentWrapper'>
      <section  className='nav'>
        <ul>
          <li>
            <img src={logo}  id='logo' alt="EQ Works"/>
          </li>
          <li>
            <Link to="/chart"> Events chart</Link>
          </li>
          <li>
            <Link to="/table"> Statistics Table</Link>
          </li>
          <li>
            <Link to="/map">Point of interest Map</Link>
          </li>
        </ul>
      </section>
      
      <Route exact path="/" component={App} />
      <Route exact path="/chart" component={DataChartSection} />
      <Route path="/table" component={DataTableSection} />
      <Route path="/map" component={DataMapSection} />
    </section>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


