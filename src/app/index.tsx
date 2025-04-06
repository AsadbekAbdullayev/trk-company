import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from '@redux/store/store.ts';
import Routes from './routing/routes.tsx';
import ProtectedRoute from './routing/ProtectedRoute.tsx';
import { ConfigProvider } from 'antd';
import './styles/index.css';
import './i18n.ts';

const rootElement = document.getElementById('root');
const queryClient = new QueryClient();
if (!rootElement) {
	throw new Error("Root element with id 'root' not found");
}

createRoot(rootElement).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<QueryParamProvider adapter={ReactRouter6Adapter}>
					<ConfigProvider
						theme={{
							components: {
								Menu: {
									colorItemBgHover: '#F8F9FA',
									colorItemBgSelected: '#F8F9FA',
									colorItemTextSelected: '#000',
									colorItemText: '#919191',
									fontSize: 16,
									borderRadius: 6,
								},
							},
						}}
					>
						<ProtectedRoute>
							<Routes />
						</ProtectedRoute>
					</ConfigProvider>
				</QueryParamProvider>
			</Provider>
		</QueryClientProvider>
	</BrowserRouter>,
);
