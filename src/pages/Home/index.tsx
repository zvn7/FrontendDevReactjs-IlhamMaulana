import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import RestaurantCardSkeleton from "@/components/RestaurantCardSkeleton";
import RestaurantList from "@/components/RestaurantList";
import useRestaurants from "@/hooks/useRestaurants";
import useRestaurantsFilter from "@/hooks/useRestaurantsFilter";

const HomeContent = () => {
	const {
		restaurants,
		isLoading,
		category,
		setCategory,
		currentPage,
		setCurrentPage,
	} = useRestaurants();
	const [openNow, setOpenNow] = useState<boolean>();
	const [priceRange, setPriceRange] = useState<string>();
	const { filteredRestaurants } = useRestaurantsFilter(
		restaurants?.data,
		openNow,
		priceRange
	);

	const clearAllFilters = () => {
		setCategory("");
		setOpenNow(undefined);
		setPriceRange(undefined);
		setCurrentPage(1);
	};

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className=" ">
			<Navbar />
			<Header />
			<div className="flex mx-auto">
				<div className="w-full md:w-1/4 p-4 md:p-6 lg:p-8 border-r">
					<div className="mb-4 flex justify-between items-center">
						<h2 className="font-bold">Filter</h2>
						<span
							className="cursor-pointer flex justify-between items-center text-sm text-gray-500"
							onClick={() => clearAllFilters()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
								/>
							</svg>
							Clear Filters
						</span>
					</div>

					<div className="mb-4">
						<h3 className="font-semibold mb-2">Open Now</h3>
						<label className="flex items-center">
							<input
								type="radio"
								checked={openNow !== undefined && openNow}
								onChange={() => setOpenNow(!openNow)}
								className="mr-2"
							/>
							Show only open restaurants
						</label>
					</div>

					<div className="mb-4">
						<h3 className="font-semibold mb-2">Price</h3>
						<select
							defaultValue={""}
							onChange={(event) => setPriceRange(event.target.value)}
							value={priceRange}
							className="w-full p-2 border rounded-md"
						>
							<option value="">Select a price level</option>
							<option value="$">Cheap</option>
							<option value="$$">Affordable</option>
							<option value="$$$">Expensive</option>
							<option value="$$$$">Very Expensive</option>
						</select>
					</div>

					<div>
						<h3 className="font-semibold mb-2">Categories/Cuisines</h3>
						<select
							className="w-full p-2 border rounded-md"
							value={category}
							onChange={(event) => setCategory(event.target.value)}
						>
							<option value="">Select a Category</option>
							{restaurants &&
								Object.keys(restaurants?.filters.restaurant_tagcategory).map(
									(tagCategory) => (
										<option key={tagCategory} value={tagCategory}>
											{
												restaurants?.filters.restaurant_tagcategory[tagCategory]
													.label
											}
										</option>
									)
								)}
						</select>
					</div>
				</div>
				<div className="flex-1 p-4 md:p-6 lg:p-8">
					<div className="mb-4 flex justify-between items-center">
						<h1 className="text-2xl md:text-3xl font-bold">Restaurants</h1>
					</div>
					{isLoading ? (
						<RestaurantCardSkeleton />
					) : (
						<RestaurantList data={filteredRestaurants} />
					)}
					<Pagination
						itemsPerPage={8}
						totalItems={parseInt(restaurants?.paging.total_results || "0")}
						paginate={paginate}
						currentPage={currentPage}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
