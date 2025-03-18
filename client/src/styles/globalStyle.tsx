import { css } from '@emotion/react';
// import './font.css';

export const globalStyles = css`
	:root {
		/* font */
		--font-NOTO: 'Noto Sans';

		/* primary */
		--color-primary: #2f2c4d;
		--color-primary-gray: #4d4d4d;

		/* secondary */
		--color-secondary-80: #595671;
		--color-secondary-60: #828094;
		--color-secondary-30: #c1c0ca;
		--color-secondary-10: #eaeaed;

		/* colors */

		--color-success: #608ee5;
		--color-warning: #b82921;

		--color-black: #000000;
		--color-white: #ffffff;

		/* grayscale */
		--color-gray-900: #1a1a1a;
		--color-gray-800: #333333;
		--color-gray-700: #4d4d4d;
		--color-gray-600: #666666;
		--color-gray-500: #808080;
		--color-gray-400: #999999;
		--color-gray-300: #b2b2b2;
		--color-gray-200: #cccccc;
		--color-gray-100: #e5e5e5;
		--color-gray-50: #f6f8fa;
		--color-gray-25: #f6f6f6;
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
