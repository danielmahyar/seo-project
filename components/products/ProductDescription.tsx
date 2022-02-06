import { useState } from 'react';

const ProductDescription = () => {
	const [section, setSection] = useState<string>("test")

	return (
		<section className="w-full bg-app-light-bg h-auto">
			<article className="w-4/6 mx-auto flex flex-col justify-center items-center py-10 space-y-5">
				<header className="w-full">
					<ul className="flex space-x-5">
						<li onClick={() => setSection("test")} className={`text-2xl cursor-pointer text-app-h1 ${(section === "test") ? "underline" : ""}`}>Description</li>
						<li onClick={() => setSection("test2")} className={`text-2xl cursor-pointer text-app-h1 ${(section === "test2") ? "underline" : ""}`}>Additional Info</li>
						<li onClick={() => setSection("test3")} className={`text-2xl cursor-pointer text-app-h1 ${(section === "test3") ? "underline" : ""}`}>Reviews</li>
						<li onClick={() => setSection("test4")} className={`text-2xl cursor-pointer text-app-h1 ${(section === "test4") ? "underline" : ""}`}>Video</li>
					</ul>
				</header>
				{section === "test" && (
					<section className="space-y-2">
						<h1 className="text-xl text-app-h1 font-bold">Test</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
						<h1 className="text-xl text-app-h1 font-bold">Test</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
					</section>
				)}
				{section === "test2" && (
					<section className="space-y-2">
						<h1 className="text-xl text-app-h1 font-bold">Test2</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
						<h1 className="text-xl text-app-h1 font-bold">Test</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
					</section>
				)}
				{section === "test3" && (
					<section className="space-y-2">
						<h1 className="text-xl text-app-h1 font-bold">Test3</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
						<h1 className="text-xl text-app-h1 font-bold">Test</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
					</section>
				)}
				{section === "test4" && (
					<section className="space-y-2">
						<h1 className="text-xl text-app-h1 font-bold">Test4</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
						<h1 className="text-xl text-app-h1 font-bold">Test</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos fuga ipsum voluptatem temporibus autem beatae corrupti optio neque aliquid eligendi voluptatibus, ab possimus accusantium excepturi quia sequi asperiores nostrum?
							Culpa, eum! Perspiciatis accusantium corrupti, omnis provident ab aliquam sunt facere enim tempora neque sapiente laudantium recusandae porro non eos minima voluptates illum. Ut modi recusandae exercitationem et temporibus. Quasi?
							Quam omnis nam eius aperiam itaque a voluptatum fugiat mollitia at id delectus earum ipsum exercitationem provident, obcaecati, quo cumque quisquam, in voluptatibus numquam corrupti. Rerum dolores laborum quisquam illo.</p>
					</section>
				)}

			</article>
		</section>
	);
};

export default ProductDescription;
