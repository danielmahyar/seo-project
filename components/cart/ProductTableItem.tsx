import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClear, AiOutlineClose } from 'react-icons/ai';
import placeholder from '../../public/assets/placeholder.svg'

const ProductTableItem = () => {
	const [quantity, setQuantity] = useState<number>(1)
	const total = quantity * 42.00
	return (
		<tr className="border-b border-gray-300">
			<td className="w-56 py-4 relative">
				<Image src={placeholder} width={100} height={100}/>
				<AiOutlineClose className="absolute top-2 left-20 bg-black text-white transform transition-all ease-in-out rotate-0 cursor-pointer rounded-full h-6 w-6 p-1 hover:bg-app-btn-primary hover:rotate-6">x</AiOutlineClose>
			</td>
			<td className="w-32">$42.00</td>
			<td className="w-32">
				<div className="flex ">
					<button onClick={() => setQuantity(prev => (prev == 1) ? 1 : prev - 1)} className="bg-app-btn-primary px-2">-</button>
					<p className="p-3 bg-slate-200">{quantity}</p>
					<button onClick={() => setQuantity(prev => prev + 1)} className="bg-app-btn-primary px-2">+</button>
				</div>
			</td>
			<td className="w-32">{total}</td>
		</tr>
	);
};

export default ProductTableItem;
