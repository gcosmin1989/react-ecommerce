import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product, category }) {
	return (
		<div className=" container col-md-4 mb-4 mt-4 d-flex flex-column align-items-cente">
			<img className="" src={product.image} alt="" />
			<h3 className="text-center">{product.name}</h3>
			<h4 className="text-center">
				{product.price} {product.currency}
			</h4>
			<div className="d-flex justify-content-center align-item-center" />
			<Link to={`/products/${category}/${product.id}`}>
				<button className="btn btn-link text-center">Cumpara!</button>
			</Link>
		</div>
	);
}

export default ProductItem;
