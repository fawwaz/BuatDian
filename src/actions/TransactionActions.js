import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	TRANSACTION_UPDATE,
	TRANSACTION_CREATE,
	TRANSACTION_FETCH_SUCCESS
} from './types';

export const transactionUpdate = ({ prop, value }) => {
	return {
		type: TRANSACTION_UPDATE,
		payload: { prop, value }
	}
};

export const transactionCreate = ({ nama_barang, kode_barang, jumlah_barang }) => {
	console.log({ nama_barang, kode_barang, jumlah_barang });
	return (dispatch) => {
		firebase.database().ref('bucket/bucket1/')
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
	return (dispatch) => {
		firebase.database().ref('bucket/bucket1/')
		.on('value', snapshot => {
			dispatch({
				type: TRANSACTION_FETCH_SUCCESS,
				payload: snapshot.val()
			});
		});
	}
}