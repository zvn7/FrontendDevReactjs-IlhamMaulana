import React from "react";
import RestaurantCard from "./RestaurantCard";
import { TRestaurantsData } from "@/types/Restaurant";

type TRestaurantListProps = {
	data?: TRestaurantsData[];
};

const RestaurantList = (props: TRestaurantListProps) => {
	const { data = [] } = props;

	if (data.length === 0) {
		return <p>No restaurants found.</p>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{data &&
				data.length > 0 &&
				data.map((restaurant, index) => {
					if (!restaurant.name || restaurant.name.length === 0) return null;
					return (
						<div key={`restaurant-${index}`}>
							<RestaurantCard data={restaurant} />
						</div>
					);
				})}
		</div>
	);
};

export default RestaurantList;
