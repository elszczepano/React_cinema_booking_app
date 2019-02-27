import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
	text-align: center;
	color: orange;
	text-transform: uppercase;
`;

const CurrentDay = () => {
	const getTodayDate = () => {
		const monthNames = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
		const now = new Date();
		return `${now.getUTCDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
	};
	return (
		<Header>Repertuar na {getTodayDate()}</Header>
	);
};

export default CurrentDay;