import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from '@/shared/ui';
import LayoutComponent from '@/shared/layout';
import HomePage from '@/pages/Home';
import Login from '@/pages/Login';
import ComingSoon from '@/pages/ComingSoon';
function Root() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path={'login'} element={<Login />} />
				<Route path={'/'} element={<LayoutComponent />}>
					<Route index element={<Navigate to="dashboard" />} />
					<Route path={'dashboard'} element={<ComingSoon />} />
					<Route path={'actives'} element={<ComingSoon />} />
					<Route path={'accounting'} element={<ComingSoon />} />
					<Route path={'strategy'} element={<ComingSoon />} />
					<Route path={'warranty'} element={<ComingSoon />} />
					<Route path={'scoring'} element={<ComingSoon />} />
					<Route path={'compensation'} element={<ComingSoon />} />
					<Route path={'center'} element={<ComingSoon />} />
					<Route path={'monitoring'} element={<ComingSoon />} />
					<Route path={'troubled-actives'} element={<ComingSoon />} />
					<Route path={'territories'} element={<ComingSoon />} />
					<Route path={'reports'} element={<ComingSoon />} />
					<Route path={'settings'} element={<ComingSoon />} />
					<Route path={'inbox'} element={<ComingSoon />} />
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
