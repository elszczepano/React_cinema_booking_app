import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

const H1 = styled.h1`
	text-align: center;
	margin: 100px 0;
`;
const Title = styled.span`
	color: orange;
`;

const PaymentTitle = ({title = ''}) => {
	return (
		title ? <H1>Płatność za rezerwację miejsc na seans: <Title>{title}</Title></H1> : <Redirect to='/'/>
	);
};

export default PaymentTitle;