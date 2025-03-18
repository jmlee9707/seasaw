import { css } from '@emotion/react';
import './font.css';

export const globalStyles = css`
	:root {
		/* font */
		--font-NOTO: 'Noto Sans';
		--font-PRE: 'Pretendard';

		/* primary */
		--color-primary: #517cff;
		--color-primary-900: #0a2476;
		--color-primary-800: #2654e6;
		--color-primary-700: #517cff;
		--color-primary-600: #6d90ff;
		--color-primary-500: #acc0ff;
		--color-primary-400: #d1dcff;
		--color-primary-300: #e3eaff;
		--color-primary-200: #eff3ff;
		--color-primary-100: #f4f7ff;

		/* secondary */
		--color-secondary: #ff6a56;
		--color-secondary-900: #d2230a;
		--color-secondary-800: #f44a32;
		--color-secondary-700: #ff6a56;
		--color-secondary-600: #ff8776;
		--color-secondary-500: #ff9b8d;
		--color-secondary-400: #ffc2ba;
		--color-secondary-300: #ffd4ce;
		--color-secondary-200: #ffe8e5;
		--color-secondary-100: #ffefec;

		/* colors */

		--color-success-600: #00b428;
		--color-success-900: #018030;

		--color-error-500: #f04349;
		--color-error-500: #da0000;
		--color-error-500: #b70202;

		--color-black: #121212;
		--color-white: #ffffff;

		/* grayscale */
		--color-gray-900: #363840;
		--color-gray-800: #474b55;
		--color-gray-700: #595e6a;
		--color-gray-600: #6b7180;
		--color-gray-500: #7f8493;
		--color-gray-400: #9499a5;
		--color-gray-300: #aeb2bc;
		--color-gray-200: #c7cad1;
		--color-gray-100: #dcdee3;
		--color-gray-50: #eff0f2;
		--color-gray-25: #fafbfc;
	}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		text-decoration: none;
		font-style: normal;

		caret-color: transparent;

		-ms-overflow-style: none;
		scrollbar-width: none;
		pointer-events: auto !important;
	}

	*::-webkit-scrollbar {
		display: none; // Chrome, Safari, Opera
	}

	html,
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Noto Sans';
	}

	button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		padding: 0;
		background-color: transparent;

		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
