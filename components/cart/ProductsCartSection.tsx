import React from 'react';
import ProductTableItem from './ProductTableItem';
import { useRouter } from 'next/router';

const ProductsCartSection = ({ products }: any) => {
	const router = useRouter()

	const handleBackHome = () => {
		router.push("/")
	}


	if (products.length === 0) return (
		<section className="lg:w-4/6 py-10 mx-auto flex flex-col h-full space-y-3 px-5 lg:px-0">
			<h1 className="text-4xl">No Products Added to Cart</h1>
			<button onClick={handleBackHome} className="px-5 py-3 bg-app-btn-primary text-white rounded text-center w-56">Back To Home</button>
		</section>
	)

	return (
		<section className="lg:w-4/6 p-4 mx-auto flex flex-col lg:flex-row h-full">

			<section className="w-full">
				<table className="w-full">
					<thead className="w-full text-left">
						<tr className="">
							<td className="text-2xl py-4 pb-5 text-app-h1 font-bold">Product</td>
							<td className="text-2xl py-4 pb-5 text-app-h1 font-bold">Price</td>
							<td className="text-2xl py-4 pb-5 text-app-h1 font-bold">Quanity</td>
							<td className="text-2xl py-4 pb-5 text-app-h1 font-bold">Total</td>
						</tr>
					</thead>

					<tbody className="">
						<ProductTableItem />
						<ProductTableItem />
						<ProductTableItem />
						<ProductTableItem />
						<ProductTableItem />
						<ProductTableItem />
					</tbody>

					<tfoot>
						<td className="flex items-center justify-start mt-5">
							<button className="bg-app-btn-primary py-2 px-4 ">Update Cart</button>
						</td>
						<td></td>
						<td></td>
						<td className="flex items-center justify-end mt-5">
							<button className="bg-app-btn-primary py-2 px-4 ">Clear Cart</button>
						</td>
					</tfoot>
				</table>
			</section>
			<section className="w-1/3">
				section
			</section>
		</section>
	);
};

export default ProductsCartSection;
