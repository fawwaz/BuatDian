import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TransactionList from './components/TransactionList';
import TransactionCreate from './components/TransactionCreate';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login !"/>
			</Scene>

			<Scene key="main">
				<Scene 
					key="transactionList" 
					component={TransactionList} 
					title="Previous Order List" 
					rightTitle="Add" 
					onRight={ () => Actions.transactionCreate() }
					initial
				/>

				<Scene 
					key="transactionCreate" 
					component={TransactionCreate} 
					title="Create new Order" 
				/>
			</Scene>
		</Router>
	);
}

export default RouterComponent;