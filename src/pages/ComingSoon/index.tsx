import React from 'react';
import { useLocation } from 'react-router-dom';
const ComingSoon: React.FC = () => {
	const { pathname } = useLocation();
	return (
		<div className="w-full h-full flex items-center justify-center text-xl text-gray-500 font-semibold">
			{pathname.slice(1).toUpperCase()} coming soon ...
		</div>
	);
};

export default ComingSoon;
