
import React, { useEffect, useState } from "react";

interface FilterProps {
	isFilterOpen: boolean;
	setIsFilterOpen: (value: boolean) => void;
	priceLevel: string | null;
	setPriceLevel: (value: string | null) => void;
	selectedCategory: string;
	setSelectedCategory: (value: string) => void;
}

interface RestaurantTagCategory {
	count: string;
	label: string;
	locale_independent_label: string;
	priority: string;
	selected: boolean;
}

const Filter: React.FC<FilterProps> = ({
	isFilterOpen,
	setIsFilterOpen,
	priceLevel,
	setPriceLevel,
	selectedCategory,
	setSelectedCategory,
}) => {
	const [categories, setCategories] = useState<RestaurantTagCategory[]>([]);

	useEffect(() => {
		const loadCategories = async () => {
			try {
				const fetchedData = await fetchRestaurants();
				console.log("Fetched Data:", fetchedData);

				const filters = fetchedData.filters;
				console.log("Filters Data:", filters);

				if (filters) {
					const categoriesArray = Object.keys(filters).map((key) => ({
						...filters[key],
					}));
					setCategories(categoriesArray);
					console.log("Categories Array:", categoriesArray);
				}
			} catch (error) {
				console.error("Error loading categories:", error);
			}
		};
		loadCategories();
	}, []);

	return (
		<div className="w-50 p-8 border-r">
			<div className="mb-4 flex justify-between items-center">
				<h2 className="font-bold">Filter</h2>
				<span
					className="cursor-pointer flex justify-between items-center text-sm text-gray-500"
					onClick={() => {
						setIsFilterOpen(false);
						setPriceLevel(null);
						setSelectedCategory("");
					}}
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

			{/* Open Now */}
			<div className="mb-4">
				<h3 className="font-semibold mb-2">Open Now</h3>
				<label className="flex items-center">
					<input
						type="checkbox"
						checked={isFilterOpen}
						onChange={(e) => setIsFilterOpen(e.target.checked)}
						className="mr-2"
					/>
					Show only open restaurants
				</label>
			</div>

			{/* Price */}
			<div className="mb-4">
				<h3 className="font-semibold mb-2">Price</h3>
				<select
					value={priceLevel || ""}
					onChange={(e) =>
						e.target.value === ""
							? setPriceLevel(null)
							: setPriceLevel(e.target.value)
					}
					className="w-full p-2 border rounded-md"
				>
					<option value="">Select a price level</option>
					<option value="$">Cheap</option>
					<option value="$$">Affordable</option>
					<option value="$$$">Expensive</option>
					<option value="$$$$">Very Expensive</option>
				</select>
			</div>

			{/* Categories/Cuisines */}
			<div>
				<h3 className="font-semibold mb-2">Categories/Cuisines</h3>
				<select
					className="w-full p-2 border rounded-md"
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					<option value="">Select a Category</option>
					{categories.map((category) => (
						<option key={category.label} value={category.label}>
							{category.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Filter;
