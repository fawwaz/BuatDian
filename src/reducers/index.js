import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TransactionFormReducer from './TransactionFormReducer';
import TransactionReducer from './TransactionReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
	auth: AuthReducer,
	transactionform: TransactionFormReducer,
	transactions: TransactionReducer,
	products: ProductReducer
});