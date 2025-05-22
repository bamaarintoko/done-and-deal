'use client'
import withAuth from "@/hoc/withAuth";
import Link from "next/link";

function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
			<h1 className="text-4xl font-bold mb-4">Selamat Datang 👋</h1>
			<p className="text-gray-600 mb-8">Pilih fitur yang ingin kamu gunakan:</p>

			<div className="flex flex-col md:flex-row gap-4">
				<Link
					href="/task"
					className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg"
				>
					Task Manager
				</Link>

				<Link
					href="/shop"
					className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg"
				>
					Shop
				</Link>
			</div>
		</main>
	);
}

export default withAuth(Home)
