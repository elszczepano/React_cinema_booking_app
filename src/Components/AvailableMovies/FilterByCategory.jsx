import React, {Component} from 'react';
import API from '../../apiConfig';
import styled from 'styled-components';

const Select = styled.select`
	color: orange;
    background: black;
    border: 1px solid orange;
    padding: 10px;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 0 0 30px 0;
`;
const H3 = styled.h3`
	margin: 0 15px 0 0;
`;

class FilterByCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};
	}
	componentDidMount() {
		API.get('Movies/GetMovieCategories').then(res => {
			this.setState({
				categories: res.data
			});
		}).catch(() => {
			window.alert('Coś poszło nie tak. Spróbuj odświeżyć stronę.');
		});
	}

	render() {
		return (
			<Wrapper>
				<H3>Filtruj:</H3>
				<Select onChange={this.props.setFilter} name="filter" id="filter">
					<option value="">Wszystkie</option>
					{this.state.categories.length ? this.state.categories.map(category => <option key={category} value={category}>{category}</option>): null}
				</Select>
			</Wrapper>
		);
	}
}

export default FilterByCategory;