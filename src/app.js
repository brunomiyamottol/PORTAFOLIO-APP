'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom'; 
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';  
import './styles/styles.scss'; 


ReactDOM.render(<AppRouter />, document.getElementById('app'));