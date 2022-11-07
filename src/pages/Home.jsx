import React from 'react';
import Layout from '../components/Layout';

function Home() {
	return (
		<div>
			<Layout>
				<h1 className="text-center text-primary py-5">Home</h1>
				<button className="btn btn-primary">Submit</button>
			</Layout>
		</div>
	);
}

export default Home;
