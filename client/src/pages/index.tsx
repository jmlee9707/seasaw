import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import StampIcon from '@assets/icon/stamp_icon.svg?react';
import MoneyIcon from '@assets/icon/money_icon.svg?react';
import { css } from '@emotion/react';

const MainPage = () => {
	const navigate = useNavigate();
	const onClickButton = (path: string) => {
		navigate(path);
	};

	return (
		<Container>
			<Wrapper>
				<Card onClick={() => onClickButton('/coupon')}>
					<IconContainer
						css={css`
							background-color: #fdf1c8;
						`}
					>
						<StampIcon
							css={css`
								width: 50%;
								height: 50%;
							`}
						/>
					</IconContainer>
					<Text>
						<p>쿠폰 적립</p>
						<p>신규 고객 등록 | 스탬프 적립</p>
					</Text>
				</Card>
				<Card onClick={() => onClickButton('/prepay')}>
					<IconContainer
						css={css`
							background-color: #f4fee7;
						`}
					>
						<MoneyIcon
							css={css`
								width: 50%;
								height: 50%;
							`}
						/>
					</IconContainer>
					<Text>
						<p>선결제 관리</p>
						<p>금액권 등록 | 금액 차감</p>
					</Text>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default MainPage;

const Container = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled('div')`
	display: flex;
	gap: 70px;

	justify-content: center;
`;

const Card = styled('div')`
	width: 430px;
	height: 500px;
	background-color: var(--color-white);
	border-radius: 16px;
	display: flex;
	gap: 56px;
	cursor: pointer;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	filter: drop-shadow(0 0 50px rgba(187, 187, 187, 0.6));

	&:hover {
		filter: drop-shadow(0 0 50px rgba(187, 187, 187, 0.9));
	}
`;

const Text = styled('div')`
	text-align: center;
	font-family: var(--font-PRE);

	p:first-child {
		font-size: 28px;
		font-weight: 700;
		color: var(--color-black);
		padding-bottom: 8px;
	}
	p:nth-child(2) {
		font-size: 20px;
		font-weight: 400;
		color: var(--color-gray-800);
	}
`;

const IconContainer = styled('div')`
	width: 200px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 28px;
`;
