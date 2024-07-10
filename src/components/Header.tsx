import React from "react";

const Header = () => {
	return (
		<header
			className="bg-cover bg-center h-80"
			style={{ backgroundImage: "url(/img/header.jpg)" }}
		>
			<div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
				<h1 className="text-4xl font-bold mb-4">
					Stop looking for a restaurant - find it.
				</h1>
				<div className="w-3/4 relative">
					<input
						type="text"
						placeholder="Search for Restaurants by Name, Cuisine, Location"
						className="w-full p-3 rounded-3xl text-black pl-10" 
					/>
					<svg
						className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192M4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49"
						/>
					</svg>
				</div>
			</div>
		</header>
	);
};

export default Header;
