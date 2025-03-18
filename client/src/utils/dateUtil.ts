export const getDate = (todayDate: Date) => {
	const DATE = ['일', '월', '화', '수', '목', '금', '토'];

	const month = todayDate.getMonth() + 1;
	const day = todayDate.getDate();
	const date = todayDate.getDay();

	return `${month}월 ${day}일 (${DATE[date]})`;
};
