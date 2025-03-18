import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { globalStyles } from './styles/globalStyle';
import reactLogo from './assets/react.svg';

function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<div>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
					<Test>안녕</Test>
				</a>
			</div>
		</>
	);
}

export default App;

const Test = styled('div')``;
