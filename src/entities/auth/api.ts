import request from '@/services/api';
import { useMutation, useQuery } from 'react-query';
import { message } from 'antd';

export const loginApi = async (credentials: {
	username: string;
	password: string;
}) => {
	try {
		const response = await request.post('/auth/login-credentials', credentials);
		return response.data;
	} catch (error: any) {
		throw error;
	}
};

export const useLoginMutation = () => {
	return useMutation(loginApi, {
		onError: (error: any) => {},
	});
};

export const meApi = async () => {
	try {
		const response = await request.get('/auth/me');
		return response.data;
	} catch (error: any) {
		throw error;
	}
};

export const useMeQuery = (shouldFetch: boolean) => {
	return useQuery('me', meApi, {
		enabled: shouldFetch,
	});
};
