import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import StarRating from "@/components/StarRating";
import RestaurantDetailSkeleton from "@/components/RestaurantDetailSkeleton";
import { Badge } from "@/components/ui/badge";
import useRestaurantDetails from "@/hooks/useRestaurantDetails";

const RestaurantDetail = () => {
	const { id } = useParams();
	const { data, isLoading, error } = useRestaurantDetails(id);

	if (isLoading) {
		return (
			<div>
				<Navbar />
				<RestaurantDetailSkeleton />
			</div>
		);
	}

	if (error || !data) {
		return (
			<div>
				<Navbar />
				<div className="p-4 text-center">Restaurant not found.</div>
			</div>
		);
	}

	return (
		<div>
			<Navbar />
			<div className="container mx-auto p-4 md:p-6 lg:p-8">
				<div className="max-w-3xl mx-auto">
					<div className="mb-8 flex justify-between items-center">
						<Link to="/">
							<div className="flex items-center bg-gray-200 p-2 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"
									/>
								</svg>
							</div>
						</Link>
						<h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
							{data.name}
						</h1>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 20 20"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M2.5 7.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m15 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-7.274 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"
								/>
							</svg>
						</div>
					</div>

					<img
						src={data.photo?.images.large.url || "placeholder-image-url"}
						alt={data.name}
						className="w-full h-auto mb-4 rounded-lg"
					/>
					<div className="flex flex-wrap gap-2 mb-2">
						{data.cuisine?.map((cuisine: any, index: number) => (
							<Badge key={index} variant="secondary">
								{cuisine.name}
							</Badge>
						)) || "No cuisines available"}
					</div>
					<div className="mb-4 flex flex-col md:flex-row justify-between items-center">
						<p className="text-lg sm:text-xl">{data.price}</p>
						<div className="flex items-center text-center mt-2 sm:mt-0">
							<p className="text-lg sm:text-xl">
								<StarRating rating={parseFloat(data.rating)} />
							</p>
							<span className="ml-2 text-gray-500 mt-1">
								({data.num_reviews})
							</span>
						</div>
					</div>

					<p className="text-base md:text-lg mb-4">{data.description}</p>

					<a
						href={data.web_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline"
					>
						View on TripAdvisor
					</a>

					{/* Optional: Map Section */}
					{/* Replace with your preferred map integration */}
					{/* <div className="mt-8">
						<MapComponent latitude={restaurant.latitude} longitude={restaurant.longitude} />
					</div> */}

					{/* Reviews Section */}
					<div className="mt-8">
						<h2 className="text-xl md:text-2xl font-bold mb-4">Reviews</h2>
						{data.reviews.map((review, index) => (
							<div key={index} className="border p-4 mb-4 rounded-lg">
								<p className="font-semibold">{review.author}</p>
								{/* Display stars based on rating */}
								<div className="flex items-center">
									<StarRating rating={parseFloat(review.rating)} />
								</div>
								<p className="text-sm sm:text-base">{review.summary}</p>
								<a
									href={review.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									Read Full Review
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantDetail;
