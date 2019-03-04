import React, {Component} from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import API from '../apiConfig';
import PaymentTitle from '../Components/Payment/PaymentTitle';
import PaymentButton from '../Components/Payment/PaymentButton';
import PaymentResult from '../Components/Payment/PaymentResult';

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto 50px auto;
`;

class Payment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			success: true,
			message: '',
			paid: false
		};
	}
	sendPaymentRequest = () => {
		if(this.state.paid) {
			this.setState({
				message: 'Płatność została już dokonana.'
			});
			return;
		}
		API.post('Payment/PayForReservations',{
			reservationToken: this.props.location.state.token
		}).then(() => {
			this.setState({
				success: true,
				paid: true,
				message: 'Wszystko poszło zgodnie z planem. Pomyslnie opłacono i zarezerwowano miejsca. Życzymy miłego seansu.'
			});
		}).catch(() => {
			this.setState({
				success: false,
				message: 'Coś poszło nie tak podczas płatności. Spróbuj ponownie później.'
			});
		});
	};
	render() {
		const title = !this.props.location.state ? '' : this.props.location.state.title;
		return (
			<Layout>
				<Container>
					<PaymentTitle title={title}/>
					<PaymentButton sendPaymentRequest={this.sendPaymentRequest}/>
					{this.state.message ? <PaymentResult success={this.state.success} message={this.state.message}/> : null}
				</Container>
			</Layout>
		);
	}
}

export default Payment;