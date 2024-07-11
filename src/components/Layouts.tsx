import Navbar from "./Navbar";
import Header from "./Header";

export default function Layouts({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="min-h-full">
				<Navbar />
				<main>
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<Header />
                        {children}
					</div>
				</main>
			</div>
		</>
	);
}
