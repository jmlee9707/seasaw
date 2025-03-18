import Header from '@components/Header';
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
	return (
		<div
			css={css`
				width: 1366px;
				height: 1024px;
				/* width: 100vw;
            height: 100vh; */
				background-color: #f4f4f4;
			`}
		>
			<Header />
			<Outlet />
		</div>
	);
};

export default DefaultLayout;
