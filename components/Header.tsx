import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillAlert, AiFillHeart, AiFillProfile, AiOutlineDown, AiOutlineMail, AiOutlinePhone, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {

	const router = useRouter()

	const handleShoppingCartClick = () => {
		router.push("/cart")
	}

	return (
		<header className="w-full">
			<section className="bg-app-purple flex items-center p-2">
				<div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 w-4/6 mx-auto items-center justify-between">
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-2">
							<AiOutlineMail color="white"/>
							<h3 className="text-white font-semibold">danielcargarmahyar@gmail.com</h3>
						</div>
						<div className="flex items-center space-x-2">
							<AiOutlinePhone color="white"/>
							<h3 className="text-white font-semibold">Test</h3>
						</div>
					</div>

					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-2">
							<h3 className="text-white font-semibold">Login</h3>
							<AiFillProfile color="white"/>
						</div>
						<div className="flex items-center space-x-2">
							<h3 className="text-white font-semibold">Wishlist</h3>
							<AiFillHeart color="white"/>
						</div>
						<AiOutlineShoppingCart className="cursor-pointer" onClick={handleShoppingCartClick} color="white"/>
					</div>

				</div>
			</section>
			<section className="flex w-4/6 mx-auto items-center justify-between py-4">
				<div className="flex w-full">
					<h1 className="text-2xl text-center mr-0 font-bold lg:mr-12 xl:mr-36">Hekto</h1>
					<nav className="hidden lg:block h-ful items-center">
						<ul className="flex space-x-4 items-center h-full">
							<Link href="/">Home</Link>
							<Link href="/products/21312312">Products</Link>
							<Link href="/">Blog</Link>
							<Link href="/">Shop</Link>
							<Link href="/">Contact</Link>
						</ul>
					</nav>
				</div>
				<div className="hidden md:flex items-center justify-end w-full">
					<input type="search" name="" id="" className="m-1 py-2 px-4 border border-black" />
					<button className="bg-slate-300 h-full py-2 px-4">
						<AiOutlineSearch />
					</button>
				</div>
			</section>
		</header>
	);
};

export default Header;
