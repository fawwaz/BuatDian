import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	TRANSACTION_UPDATE,
	TRANSACTION_CREATE,
	TRANSACTION_FETCH_SUCCESS,
	TRANSACTION_SAVE_SUCCESS
} from './types';

export const transactionUpdate = ({ prop, value }) => {
	return {
		type: TRANSACTION_UPDATE,
		payload: { prop, value }
	}
};

export const transactionCreate = ({ nama_barang, kode_barang, jumlah_barang }) => {
	const { currentUser } = firebase.auth();
	
	return (dispatch) => {
		firebase.database().ref(`bucket/${currentUser.uid}`)
			.push({ nama_barang, kode_barang, jumlah_barang })
			.then( () => {
				console.log("tes");
				dispatch({ type: TRANSACTION_CREATE });
				Actions.transactionList({ type:'reset' });
			}).catch( (e) => {
				console.warn(e);
			});
	}
}

export const transactionFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`bucket/${currentUser.uid}`)
		.on('value', snapshot => {
			dispatch({
				type: TRANSACTION_FETCH_SUCCESS,
				payload: snapshot.val()
			});
		});
	};
}

export const transactionSave = ({ nama_barang, kode_barang, jumlah_barang, uid}) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`bucket/${currentUser.uid}/${uid}`)
		.set({ nama_barang, kode_barang, jumlah_barang })
		.then( () =>{
			dispatch({type: TRANSACTION_SAVE_SUCCESS })
			Actions.transactionList({ type: 'reset' });
		});
	};
}

export const transactionDelete = ({ uid }) => {
	const { currentUser } = firebase.auth();
	
	return () => {
		firebase.database().ref(`bucket/${currentUser.uid}/${uid}`)
		.remove()
		.then( () => {
			Actions.transactionList({ type: 'reset' });
		});
	};
}