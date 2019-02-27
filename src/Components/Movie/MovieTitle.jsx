import React from 'react';
import styled from'styled-components';

const H1 = styled.h1`
	margin-top: 100px;
	padding-bottom: 50px;
	border-bottom: 2px solid orange;
`;
const Title = styled.span`
	color: orange;
`;

const MovieTitle = ({title}) => {
	return (
		<H1>Szczegóły o filmie <Title>{title}</Title></H1>
	);
};

export default MovieTitle;