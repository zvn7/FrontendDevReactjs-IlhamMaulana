import React from "react";
import StarRating from "./StarRating";
import { Badge } from "./ui/badge";
import { Separator } from "./separator";
import { TRestaurantsData } from "@/types/Restaurant";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type TdataCardProps = {
	data: TRestaurantsData;
};

const dataCard = (props: TdataCardProps) => {
	const { data } = props;
	const rating = parseFloat(data.rating);
	const numReviews = parseInt(data.num_reviews);
	if (!data.name || data.name.length === 0) return false;

	return (
		<div className="border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer h-[400px]">
			<div className="relative">
				<img
					src={data.photo?.images.large.url || "placeholder-image-url"}
					alt={data.name}
					className="w-full h-48 object-cover rounded-t-lg"
				/>
				<button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md items-center text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-800"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.828q-1.601-1.593-2.528-2.81t-1.296-2.2T3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.32 0 2.475.675T12 6.289Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 .996-.368 1.98q-.369.986-1.296 2.202t-2.519 2.809q-1.592 1.592-4.06 3.828zm0-1.354q2.4-2.17 3.95-3.716t2.45-2.685t1.25-2.015Q20 9.006 20 8.15q0-1.5-1-2.5t-2.5-1q-1.194 0-2.204.682T12.49 7.385h-.978q-.817-1.39-1.817-2.063q-1-.672-2.194-.672q-1.48 0-2.49 1T4 8.15q0 .856.35 1.734t1.25 2.015t2.45 2.675T12 18.3m0-6.825"
						/>
					</svg>
				</button>
			</div>
			<div className="p-4 space-y-2">
				<div className="flex items-center justify-between ">
					<h2 className="text-xl font-bold ">{data.name}</h2>
					<Badge className="p-2">{data.open_now_text}</Badge>
				</div>
				<Separator />
				<p className="text-gray-500 ">{data.address}</p>
				<div className="flex items-center justify-between ">
					<p className="text-gray-500 font-semibold">{data.price}</p>
					<div className="flex items-center ">
						<StarRating rating={rating} />
						<span className="ml-2 text-gray-500 ">({numReviews} reviews)</span>
					</div>
				</div>
				<Link to={`/detail/${data.location_id}`}>
					<Button>View Details</Button>
				</Link>
			</div>
		</div>
	);
};

export default dataCard;
