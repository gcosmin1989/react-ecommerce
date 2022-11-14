import React, { Component } from 'react';
import Layout from '../components/Layout';

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: {}
		};
	}
	componentDidMount() {
		const { match } = this.props;
		console.log(match);
		console.log(this.props);
	}
	render() {
		return (
			<div>
				<Layout>
					<h1>Category Page</h1>
				</Layout>
			</div>
		);
	}
}

export default Category;
