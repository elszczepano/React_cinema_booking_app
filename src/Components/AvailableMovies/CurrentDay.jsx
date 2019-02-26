import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
	text-align: center;
	color: orange;
	text-transform: uppercase;
`;

const CurrentDay = () => {
	const getTodayDate = () => {
		const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
		const now = new Date();
		return `${now.getUTCDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
	};
	return (
		<Header>Repertiore for {getTodayDate()}</Header>
	);
};

export default CurrentDay;