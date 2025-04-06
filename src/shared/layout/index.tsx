import Navbar from './navbar';
import SidebarComponent from './sidebar';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {
	return (
		<div className="w-full h-full flex">
			<SidebarComponent />
			<div className="w-full h-full ">
				<div>
					<Navbar />
					<div className="w-full h-[calc(100vh-90px)] flex flex-col overflow-auto p-4">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LayoutComponent;
