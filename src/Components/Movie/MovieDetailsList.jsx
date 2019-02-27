import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
	::before {
		content: '•';
		color: orange;
		margin-right: 15px;
	}
	padding: 5px 0;
	list-style: none;
`;

const MovieDetailsList = ({items = []}) => {
	return (
		items.map(category => <Item key={category}>{category}</Item>)
	);
};

export default MovieDetailsList;