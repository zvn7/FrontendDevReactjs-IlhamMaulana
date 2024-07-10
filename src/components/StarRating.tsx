import React from "react";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const halfStars = Math.ceil(rating - fullStars);
	const emptyStars = 5 - fullStars - halfStars;

	const renderStars = (count: number, type: string) => {
		const starIcon = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 36 36"
				className={`inline ${
					type === "full" ? "text-yellow-500" : "text-gray-300"
				}`}
			>
				<path
					fill="currentColor"
					d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z"
				/>
				<path fill="none" d="M0 0h36v36H0z" />
			</svg>
		);

		return Array.from({ length: count }).map((_, index) => (
			<span key={index}>{starIcon}</span>
		));
	};

	return (
		<div className="flex items-center justify-center">
			<div className="inline-flex space-x-1 items-center text-center">
				{renderStars(fullStars, "full")}
				{renderStars(halfStars, "half")}
				{renderStars(emptyStars, "empty")}
			</div>
		</div>
	);
};

export default StarRating;
