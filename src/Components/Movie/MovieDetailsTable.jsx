import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
	padding: 20px 0;
	border-bottom: 1px solid orange;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	text-align: center;
`;
const Table = styled.table`
	width: 80%;
	margin: 0 auto 50px auto;
`;
const H2 = styled.h2`
	text-align: center;
	color: orange;
`;

const MovieDetailsTable = ({details}) => {
	return (
		<>
			<H2>Pozostałe informacje:</H2>
			<Table>
				<tbody>
					<Tr>
						<td>Limit wiekowy:</td>
						<td>{details.ageLimit ? `${details.ageLimit} lat` : 'brak'}</td>
					</Tr>
					<Tr>
						<td>Czas trwania:</td>
						<td>{details.duration} min.</td>
					</Tr>
					<Tr>
						<td>Data premiery:</td>
						<td>{details.releaseDate ? details.releaseDate.substring(0,10) : null}</td>
					</Tr>
					<Tr>
						<td>Oryginalny tytuł:</td>
						<td>{details.originalTitle}</td>
					</Tr>
					<Tr>
						<td>Rok produkcji:</td>
						<td>{details.productionYear}</td>
					</Tr>
					<Tr>
						<td>Miejsce produkcji:</td>
						<td>{details.productionPlace}</td>
					</Tr>
					<Tr>
						<td>Język oryginału:</td>
						<td>{details.originalLanguage}</td>
					</Tr>
					<Tr>
						<td>Reżyser:</td>
						<td>{details.directorFullName}</td>
					</Tr>
				</tbody>
			</Table>
		</>
	);
};

export default MovieDetailsTable;