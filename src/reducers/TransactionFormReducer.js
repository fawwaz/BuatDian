import {
	TRANSACTION_UPDATE,
	TRANSACTION_CREATE
} from '../actions/types';

const INITIAL_STATE = {
	nama_barang: '',
	kode_barang: '',
	jumlah_barang: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRANSACTION_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value }
		case TRANSACTION_CREATE:
			return INITIAL_STATE;
		default: 
			return state;
	}
}