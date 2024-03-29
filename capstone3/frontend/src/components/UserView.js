import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


export default function UserView({productsData}) {

	console.log(productsData)

	const [products, setProducts] = useState([])

	useEffect(() => {
		console.log('productsData:', productsData);

		const productsArr = productsData.map(product => {
			console.log("products: ", product)
			if(product.isActive === true) {
				return (
					<ProductCard productProp={product} key={product._id}/>
					)
			} else {
				return null;
			}
		})

		setProducts(productsArr)

	}, [productsData])

	return(
		<>
			{ products }
		</>
		)
}