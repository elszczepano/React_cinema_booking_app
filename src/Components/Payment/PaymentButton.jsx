import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 100px 0;
`;
const Button = styled.button`
	all: unset;
	text-transform: uppercase;
	background-color: orange;
	color: black;
	font-weight: bold;
	padding: 1rem;
	cursor: pointer;
	transition: transform .3s;
	&:hover {
		transform: scale(1.03);
	}
`;

const PaymentButton = ({sendPaymentRequest}) => {
	return (
		<div>
			<Wrapper>
				<Button onClick={sendPaymentRequest}>Potwierdzam rezerwację i płacę</Button>
			</Wrapper>
		</div>
	);
};

export default PaymentButton;