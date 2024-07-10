const RestaurantDetailSkeleton: React.FC = () => {
	return (
		<div className="container mx-auto p-6">
			<div className="max-w-3xl mx-auto">
				<div className="mb-8 flex justify-between items-center">
					<div className="bg-gray-200 p-2 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 "
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"
							/>
						</svg>
					</div>
					<div className="text-3xl font-bold mb-4 bg-gray-300 h-8 rounded w-2/3"></div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 "
							viewBox="0 0 20 20"
						>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M2.5 7.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m15 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-7.274 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"
							/>
						</svg>
					</div>
				</div>

				<div className="bg-gray-300 h-80 rounded-lg mb-4"></div>
				<div className="text-lg mb-4 bg-gray-300 h-12 rounded"></div>
				<div className="text-xl mb-2 bg-gray-300 h-12 rounded"></div>
				<div className="text-xl mb-2 bg-gray-300 h-12 rounded"></div>
				<div className="text-xl mb-4 bg-gray-300 h-12 rounded"></div>

				<div className="text-2xl font-bold mb-4">Reviews</div>
				{[...Array(3)].map((_, index) => (
					<div key={index} className="border p-4 mb-4 rounded-lg">
						<div className="font-semibold bg-gray-300 h-6 rounded mb-2"></div>
						<div className="flex items-center mb-2">
							<div className="bg-gray-300 h-4 w-16 rounded"></div>
						</div>
						<div className="bg-gray-300 h-20 rounded"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RestaurantDetailSkeleton;