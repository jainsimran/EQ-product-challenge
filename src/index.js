import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './imgs/logo.png'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import DataChartSection from './sections/DataChartSection';
import DataTableSection from './sections/DataTableSection';
import DataMapSection from './sections/DataMapSection';

const Routing = () => (
  <App />
)
ReactDOM.render(<Routing />, document.getElementById('root'))


