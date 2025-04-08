import { useEffect } from 'react';
import { useMeQuery } from '@/entities/auth/api';
import { Loader } from '@/shared/ui';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '@redux/slices/generelSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { data, isLoading, refetch } = useMeQuery(false);
	const token = localStorage.getItem('token');
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) {
			navigate('/login');
		} else if (token && pathname !== 'login') {
			refetch();
		}
	}, [token]);

	useEffect(() => {
		if (data?.id && token) {
			dispatch(
				setUserDetails({
					id: data?.id,
					firstName: data?.firstName,
					lastName: data?.lastName,
					username: data?.username,
					email: data?.email,
					profilePhoto: data?.profilePhoto,
				}),
			);
		}
	}, [data]);

	if (isLoading) return <Loader />;

	return <>{children}</>;
};

export default ProtectedRoute;
