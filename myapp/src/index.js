import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import SearchObj from './SearchObj';
import Details from './Details';


ReactDOM.render((
		<HashRouter>
			<App>
				<Route exact path="/" component={SearchObj} />
				<Route path="/Details" component={Details} />
			</App>
		</HashRouter>
	),
document.getElementById('root'));