import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Dots from '@assets/icon/verticleDots.svg?react';
import { getDate } from '../utils/dateUtil';

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const onClickNavButton = (path: string) => {
		if (location.pathname !== path) {
			navigate(path);
		}
	};

	return (
		<Container>
			<Name onClick={() => onClickNavButton('/')}>카페시소</Name>
			<Nav>
				<NavButton
					$isSelected={location.pathname === '/coupon'}
					onClick={() => onClickNavButton('/coupon')}
				>
					쿠폰
				</NavButton>
				<div css={divideLine} />
				<NavButton
					$isSelected={location.pathname === '/prepay'}
					onClick={() => onClickNavButton('/prepay')}
				>
					선불권
				</NavButton>
			</Nav>
			<Nav>
				<DateText>{getDate(new Date())}</DateText>
				<Dots />
			</Nav>
		</Container>
	);
};

export default Header;

const Container = styled('div')`
	background-color: var(--color-gray-800);
	color: var(--color-white);
	font-family: var(--font-PRE);
	padding: 24px 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Name = styled('p')`
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 2%;
`;

const DateText = styled('p')`
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 2%;
`;

const NavButton = styled('button')<{ $isSelected: boolean }>`
	padding: 0 10px;
	font-size: 18px;
	line-height: 100%;
	font-weight: ${(props) => (props.$isSelected ? '600' : '500')};
	color: ${(props) => (props.$isSelected ? 'var(--color-white)' : 'var(--color-gray-200)')};
`;

const Nav = styled('nav')`
	display: flex;
	gap: 8px;
	align-items: center;
`;

const divideLine = css`
	height: 18px;
	width: 1px;
	background-color: var(--color-gray-200);
`;
