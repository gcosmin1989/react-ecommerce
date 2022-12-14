import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} />
					<Route path="/category/:categoryName" component={Category} />
					<Route component={Page404} />
				</Switch>
			</div>
		);
	}
}
export default App;
