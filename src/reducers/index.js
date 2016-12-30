import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TransactionFormReducer from './TransactionFormReducer';
import TransactionReducer from './TransactionReducer';

export default combineReducers({
	auth: AuthReducer,
	transactionform: TransactionFormReducer,
	transactions: TransactionReducer
});