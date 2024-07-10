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

	// useEffect(() => {
	//     setRestaurants(undefined);
	//     setIsLoading(true);
	//     getAllRestaurants(currentPage, category).then((result) => {
	//         setRestaurants(result);
	//         setIsLoading(false);
	//     });
	// }, [category]);

	// const loadMore = async () => {
	//     try {
	//         if (restaurants && parseInt(restaurants.paging.total_results) > restaurants.data.length) {
	//             setIsLoading(true);
	//             setCurrentPage(currentPage + 1);
	//             const { data } = await getAllRestaurants(currentPage + 1, category).then((result) => result);
	//             const currentRestaurants = restaurants;
	//             currentRestaurants.data.push(...data);
	//             setRestaurants(currentRestaurants);
	//         }
	//     } catch (error) {
	//         setError(error);
	//     } finally {
	//         setIsLoading(false);
	//     }
	// };

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
