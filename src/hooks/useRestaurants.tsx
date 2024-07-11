import { getAllRestaurants } from "@/data/fetch";
import { TRestaurantsResponse } from "@/types/Restaurant";
import { useEffect, useState } from "react";

const useRestaurants = () => {
	const [restaurants, setRestaurants] = useState<
		TRestaurantsResponse | undefined
	>();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();
	const [category, setCategory] = useState<string>("");

	useEffect(() => {
		const fetchRestaurants = async () => {
			setIsLoading(true);
			try {
				const result = await getAllRestaurants(currentPage, category);
				setRestaurants(result);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchRestaurants();
	}, [category, currentPage]);

	return {
		restaurants,
		isLoading,
		error,
		category,
		setCategory,
		currentPage,
		setCurrentPage,
	};
};

export default useRestaurants;
