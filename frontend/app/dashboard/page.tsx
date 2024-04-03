import Notes from "@/components/Dashboard/Notes";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center w-full gap-6 py-2 px-4 mb-14">
			<Notes />
		</div>
	);
}
