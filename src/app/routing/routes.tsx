import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@/shared/ui';
import LayoutComponent from '@/shared/layout';
import HomePage from '@/pages/Home';
function Root() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path={'/dashboard'} element={<LayoutComponent />}>
					<Route path={''} element={<HomePage />} />
					<Route path={'expenses'} element={<HomePage />} />
					<Route path={'Бухгалтерия'} element={<HomePage />} />
				</Route>

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
