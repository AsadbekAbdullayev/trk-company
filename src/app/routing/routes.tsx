import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@/shared/ui';
import HomePage from '@/pages/Home';
function Root() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{/* home */}
				<Route path={'/'} element={<HomePage />} />
				<Route
					path={'*'}
					element={
						<div className="flex w-full h-screen justify-center items-center">
							<h1>404 Not found 🙁</h1>
						</div>
					}
				/>
			</Routes>
		</Suspense>
	);
}

export default Root;
