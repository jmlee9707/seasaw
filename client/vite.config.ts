import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		svgrPlugin(),
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
	],
	resolve: {
		alias: [
			{ find: '@src', replacement: resolve('src/components') },
			{ find: '@components', replacement: resolve('src/components') },
			{ find: '@pages', replacement: resolve('src/pages') },
			{ find: '@assets', replacement: resolve('src/assets') },
			{ find: '@styles', replacement: resolve('src/styles') },
			{ find: '@hooks', replacement: resolve('src/hooks') },
			{ find: '@store', replacement: resolve('src/store') },
			{ find: '@types', replacement: resolve('src/types') },
			{ find: '@utils', replacement: resolve('src/utils') },
			{ find: '@constants', replacement: resolve('src/constants') },
			{ find: '@api', replacement: resolve('src/api') },
		],
	},
});
