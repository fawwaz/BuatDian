import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_LOGIN
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({
			type:USER_LOGIN
		});

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then( user => loginUserSuccess(dispatch, user) )
		.catch((error) => {
			console.log(error);

			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFailed(dispatch));

		});
		

	};
};

export const loginAnonymously = () => {
	return (dispatch) => {
		dispatch({
			type:USER_LOGIN
		});

		firebase.auth().signInAnonymously()
		.then( (user) => loginUserSuccess(dispatch, user) )
		.catch( (error) => {
			console.log(error);
		})		
	}
};

const loginUserFailed = (dispatch) => {
	dispatch({
		type: USER_LOGIN_FAILED,
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: USER_LOGIN_SUCCESS,
		payload: user
	});

	Actions.main();
};
