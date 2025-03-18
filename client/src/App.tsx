import CouponPage from '@pages/coupon';
import PrepayPage from '@pages/prepay';
import DefaultLayout from '@layout/defaultLayout';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages';

function App() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route index path="/" element={<MainPage />} />
				<Route index path="/coupon" element={<CouponPage />} />
				<Route path="/prepay" element={<PrepayPage />} />
			</Route>
		</Routes>
	);
}

export default App;
