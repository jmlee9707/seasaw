import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{ path: '*', element: <App /> }]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Global styles={globalStyles} />
		<RouterProvider router={router} />
	</StrictMode>
);
