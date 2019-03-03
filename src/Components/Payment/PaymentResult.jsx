import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 100px 0;
`;
const Message = styled.div`
	color: ${({success}) => success ? 'green' : 'red'};
	font-weight: 700;
	text-align: center;
	font-size: 24px;
`;

const PaymentResult = ({message, success}) => {
	return (
		<Wrapper>
			<Message success={success}>{message}</Message>
		</Wrapper>
	);
};

export default PaymentResult;