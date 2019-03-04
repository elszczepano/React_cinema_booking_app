import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

const H1 = styled.h1`
	text-align: center;
	margin: 20px;
`;
const Title = styled.span`
	color: orange;
`;

const ChoosedMovieTitle = ({title = ''}) => {
	return (
		title ? <H1>Wybierz miejsca na seans: <Title>{title}</Title></H1> : <Redirect to='/'/>
	);
};

export default ChoosedMovieTitle;