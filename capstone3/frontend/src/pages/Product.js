import { useEffect, useState, useContext } from 'react';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import UserContext from '../UserContext';
import ProductCard from '../components/ProductCard';


export default function Products(){

	const {user} = useContext(UserContext)

	const [products, setProducts] = useState([]);

	const fetchData = () => {

		let fetchUrl = user.isAdmin === true ? `http://localhost:4000/products/all` : `http://localhost:4000/products/`

		fetch(fetchUrl, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			console.log(typeof data);

			if(typeof data.message !== "String"){
				setProducts(data.products);
			} else {
				setProducts([]);
			}
		})
	}
	useEffect(() => {

		fetchData();

	}, [])

	return(
		<>
			{
				(user.isAdmin === true) ?
					<AdminView productsData={products} fetchData={fetchData}/>

				:
					<UserView productsData={products} />
			}
		</>
		)
}