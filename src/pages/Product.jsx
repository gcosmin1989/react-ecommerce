import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';

function Product(props) {
	const productId = props.match.params.productId;
	const category = props.match.params.categoryName;
	const items = products[category].items;
	const product = items.find((p) => p.id === +productId);
	console.log(product);

	return (
		<Layout>
			{product.name};
			<img src={product.image} alt="" />
		</Layout>
	);
}

export default Product;
