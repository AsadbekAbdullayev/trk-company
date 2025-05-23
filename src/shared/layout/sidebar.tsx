import { Layout, Menu, Input, Empty } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '@/assets/icons/logo.svg';
import { menuItems } from './menuItems';

const SidebarComponent = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [searchTerm, setSearchTerm] = useState('');

	const handleMenu = (key: string) => {
		if (key === 'logout') {
			localStorage.removeItem('auth');
			navigate('/');
		} else {
			navigate(`/${key}`);
		}
	};

	// Recursive function to filter menu items and sub-items
	const filterMenuItems: any = (menuItems: any[], search: string) => {
		return menuItems
			.filter(
				(item: any) =>
					item.label.toLowerCase().includes(search.toLowerCase()) ||
					(item.children && filterMenuItems(item.children, search).length > 0),
			)
			.map((item) => ({
				...item,
				children: item.children
					? filterMenuItems(item.children, search)
					: undefined,
			}));
	};

	// Menularni o'z ichiga olgan nested structure

	const filteredMenuItems = filterMenuItems(menuItems, searchTerm); // Apply search filter to menu items

	return (
		<Layout className="!h-full !min-w-[266px]  bg-white !p-0 border-r border-[#E9ECEF]">
			<div className="text-white text-center font-bold text-lg">
				<img src={Logo} alt="trk_logo" />
			</div>

			{/* Search input */}
			<div className="h-[calc(100vh-90px)]  px-4 py-2 overflow-y-auto ">
				<Input
					className="!rounded-[8px] !h-[40px] mt-5 !border-[#E1E1E1] !border-[1px]"
					prefix={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M17.9421 17.0578L14.0304 13.1469C15.1642 11.7857 15.7295 10.0398 15.6089 8.27244C15.4882 6.50506 14.6908 4.85223 13.3825 3.65779C12.0743 2.46334 10.3559 1.81926 8.58486 1.85951C6.81382 1.89976 5.12647 2.62125 3.87383 3.87389C2.62118 5.12653 1.89969 6.81388 1.85944 8.58492C1.8192 10.356 2.46328 12.0744 3.65772 13.3826C4.85217 14.6909 6.50499 15.4883 8.27238 15.6089C10.0398 15.7296 11.7856 15.1642 13.1468 14.0305L17.0577 17.9422C17.1158 18.0003 17.1848 18.0463 17.2606 18.0777C17.3365 18.1092 17.4178 18.1253 17.4999 18.1253C17.5821 18.1253 17.6634 18.1092 17.7392 18.0777C17.8151 18.0463 17.8841 18.0003 17.9421 17.9422C18.0002 17.8841 18.0463 17.8152 18.0777 17.7393C18.1091 17.6634 18.1253 17.5821 18.1253 17.5C18.1253 17.4179 18.1091 17.3366 18.0777 17.2607C18.0463 17.1848 18.0002 17.1159 17.9421 17.0578ZM3.12493 8.75C3.12493 7.63748 3.45483 6.54994 4.07292 5.62491C4.691 4.69989 5.56951 3.97892 6.59734 3.55317C7.62517 3.12743 8.75617 3.01604 9.84732 3.23308C10.9385 3.45012 11.9407 3.98585 12.7274 4.77252C13.5141 5.55919 14.0498 6.56147 14.2669 7.65261C14.4839 8.74376 14.3725 9.87475 13.9468 10.9026C13.521 11.9304 12.8 12.8089 11.875 13.427C10.95 14.0451 9.86245 14.375 8.74993 14.375C7.2586 14.3733 5.82882 13.7802 4.77429 12.7256C3.71975 11.6711 3.12659 10.2413 3.12493 8.75Z"
								fill="#8F96A3"
							/>
						</svg>
					}
					placeholder="Menularni qidirish..."
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
				<div className="h-full max-h-[622px] overflow-y-auto mt-5">
					{filteredMenuItems.length === 0 && searchTerm ? (
						<div className="flex items-start justify-center h-full pt-8">
							<Empty description="Menu topilmadi" />
						</div>
					) : (
						<Menu
							mode="inline"
							className="!h-full !w-full !border-none "
							selectedKeys={[location.pathname.replace('/', '')]}
							onClick={(e) => handleMenu(e.key)}
							items={filteredMenuItems.map((item: any) => ({
								...item,
								icon: item.icon(
									location.pathname.replace('/', '') === item.key,
								),
							}))}
						/>
					)}
				</div>

				<div className="w-full flex flex-col gap-[6px] items-center justify-center py-16">
					<p className="text-[#306BFF] text-[16px]">www.edcom.uz</p>
					<div
						className="w-full !h-[1px]"
						style={{
							background:
								'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #306BFF 51%, rgba(255, 255, 255, 0.00) 100%)',
						}}
					></div>
					<p className="text-[#212529] text-[12px] max-w-[171px] text-center">
						© "Tadbirkorlikni rivojlantirishkompaniyasi"
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default SidebarComponent;
