'use strict'; 
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css/normalize.css';  
import './styles/styles.scss'; 


const App = () => (
	<div>
	<AppRouter />
	</div>
); 

ReactDOM.render(<App isAdmin={true} isAuthenticated={true}/>, document.getElementById('app'));