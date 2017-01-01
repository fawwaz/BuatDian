import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser, loginAnonymously, productFetch } from '../actions';
import { Spinner } from './commons';

class LoginForm extends Component{
	componentWillMount() {
		this.props.productFetch();
	}

	onUsernameChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		
		this.props.loginUser({ email, password });
	}

	onButtonGuestPress() {
		this.props.loginAnonymously();
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return(
			<View>
				<Button
					style={{marginBottom: 10}} 
					title="Login/Register" 
					onPress={this.onButtonPress.bind(this)}
				/>
				<Button 
					title="Sign In as Guest" 
					onPress={this.onButtonGuestPress.bind(this)}
				/>
			</View>
		);
	}



	render() {
		return(
			<View>
				<FormLabel>Username : </FormLabel>
				<FormInput 
					onChangeText={this.onUsernameChange.bind(this)}
					value={this.props.email}
				/>

				<FormLabel>Password : </FormLabel>
				<FormInput 
					secureTextEntry={true} 
					onChangeText={this.onPasswordChange.bind(this)}
				/>

				<Text>{this.props.error}</Text>

				{this.renderButton()}
			</View>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, user } = auth;
	return { email, password, error, loading, user };
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser,
	loginAnonymously,
	productFetch
})(LoginForm);
