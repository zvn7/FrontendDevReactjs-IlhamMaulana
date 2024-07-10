import { useMemo } from "react";
import { TRestaurantsData } from "../types/Restaurant";

const useRestaurantsFilter = (
	restaurants: TRestaurantsData[] = [],
	openNow?: boolean,
	priceRange?: string
) => {
	const filteredRestaurants = useMemo(() => {
		if (openNow === undefined && priceRange === undefined) return restaurants;
		return restaurants
			.filter((restaurant) => {
				if (openNow === undefined) return true;
				return openNow ? !restaurant.is_closed : true;
			})
			.filter((restaurant) => {
				if (priceRange == undefined || priceRange.length === 0) return true;
				if (restaurant.price_level === undefined) return false;
				return restaurant.price_level.split(" - ").includes(priceRange);
			});
	}, [restaurants, openNow, priceRange]);

	return {
		filteredRestaurants,
	};
};

export default useRestaurantsFilter;
