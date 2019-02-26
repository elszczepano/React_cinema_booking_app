import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	padding: 20px 0;
	border-bottom: 2px solid orange;
`;
const Title = styled.h2`
	margin: 10px 0;
`;
const Details = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 5px 0;
`;
const Detail = styled.li`
	margin: 0 5px;
	&:first-of-type {
		margin: 0;
	}
`;
const SingleMovieShortcut = ({movie}) => {
	return (
		<Container>
			<Title>{movie.title}</Title>
			<Details>
				{movie.categories.map((category, i) => <Detail key={i}>{category},</Detail>)}
				<Detail>Age limit: {movie.ageLimit},</Detail>
				<Detail>Duration: {movie.duration} min.</Detail>
			</Details>
		</Container>
	);
};

export default SingleMovieShortcut;