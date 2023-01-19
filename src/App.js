import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import { Component } from 'react';
import TermsAndCond from './pages/TermsAndCond';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} />
					<Route path="/terms-conditions" component={TermsAndCond} />
					<Route path="/category/:categoryName" component={Category} />
					<Route component={Page404} />
				</Switch>
			</div>
		);
	}
}
export default App;
