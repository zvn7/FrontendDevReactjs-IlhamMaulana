import React from "react";

const RestaurantCardSkeleton: React.FC = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{[...Array(6)].map((_, index) => (
				<div
					key={index}
					className="border rounded-lg shadow-md  h-[500px] animate-pulse  bg-muted"
				>
					<div className="relative bg-gray-300 rounded-t-lg h-48"></div>
					<div className="p-4 space-y-4">
						<h2 className="text-xl font-bold mb-2 bg-gray-300 h-6 rounded"></h2>
						<p className="text-gray-500 mb-2 bg-gray-300 h-4 rounded"></p>
						<p className="text-gray-500 font-semibold mb-2 bg-gray-300 h-4 rounded"></p>
						<p className="bg-gray-300 h-4 rounded"></p>
						<div className="flex flex-wrap gap-2 mb-2">
							<div className="bg-gray-300 h-4 w-20 rounded"></div>
							<div className="bg-gray-300 h-4 w-20 rounded"></div>
							<div className="bg-gray-300 h-4 w-20 rounded"></div>
						</div>
						<div className="flex items-center mb-2">
							<div className="bg-gray-300 h-4 w-16 rounded"></div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default RestaurantCardSkeleton;
