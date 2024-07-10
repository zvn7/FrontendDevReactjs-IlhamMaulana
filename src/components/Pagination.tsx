import React from "react";

interface PaginationProps {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	itemsPerPage,
	totalItems,
	currentPage,
	paginate,
}) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	const renderPageNumbers = () => {
		const totalPages = pageNumbers.length;
		const pageLinks = [];

		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) {
				pageLinks.push(
					<button
						key={i}
						onClick={() => paginate(i)}
						className={`mx-1 px-3 py-1 border rounded ${
							currentPage === i
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						}`}
					>
						{i}
					</button>
				);
			}
		} else {
			let startPage = Math.max(currentPage - 1, 1);
			let endPage = Math.min(startPage + 2, totalPages);

			if (currentPage <= 2) {
				startPage = 1;
				endPage = 3;
			} else if (currentPage >= totalPages - 1) {
				startPage = totalPages - 2;
				endPage = totalPages;
			}

			for (let i = startPage; i <= endPage; i++) {
				pageLinks.push(
					<button
						key={i}
						onClick={() => paginate(i)}
						className={`mx-1 px-3 py-1 border rounded ${
							currentPage === i
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						}`}
					>
						{i}
					</button>
				);
			}

			if (startPage > 2) {
				pageLinks.unshift(
					<button
						key={1}
						onClick={() => paginate(1)}
						className={`mx-1 px-3 py-1 border rounded ${
							currentPage === 1
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						}`}
					>
						1
					</button>,
					<span key="ellipsis1" className="mx-1 px-3 py-1">
						...
					</span>
				);
			}

			if (endPage < totalPages - 1) {
				pageLinks.push(
					<span key="ellipsis2" className="mx-1 px-3 py-1">
						...
					</span>,
					<button
						key={totalPages}
						onClick={() => paginate(totalPages)}
						className={`mx-1 px-3 py-1 border rounded ${
							currentPage === totalPages
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						}`}
					>
						{totalPages}
					</button>
				);
			}
		}

		return pageLinks;
	};

	return (
		<div className="flex justify-end mt-6">
			<button
				onClick={() => paginate(currentPage - 1)}
				className="mx-1 px-3 py-1 border rounded-xl bg-white text-black"
				disabled={currentPage === 1}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					viewBox="0 0 24 24"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
						d="m14 7l-5 5m0 0l5 5"
					/>
				</svg>
			</button>
			{renderPageNumbers()}
			<button
				onClick={() => paginate(currentPage + 1)}
				className="mx-1 px-3 py-1 border rounded-xl bg-white text-black"
				disabled={currentPage === pageNumbers.length}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					viewBox="0 0 24 24"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
						d="m10 17l5-5m0 0l-5-5"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Pagination;
