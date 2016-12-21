import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component{
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

				<Button 
					title="Login/Register" 
					onPress={this.onButtonPress.bind(this)}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		email : state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser
})(LoginForm);
