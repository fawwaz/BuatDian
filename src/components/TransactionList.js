import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { transactionFetch } from '../actions';
import ListItem from './ListItem';

class TransactionList extends Component{
	componentWillMount() {
		this.props.transactionFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ transactions }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.datasource = ds.cloneWithRows(transactions);
	}

	renderRow(transaction) {
		return <ListItem transaction={transaction} />
	}

	render() {
		console.log(this.props);
		return(
			<View style={styles.container}>
				<View style={styles.listStyle}>
					<ListView 
						enableEmptySections
						dataSource={this.datasource}
						renderRow={this.renderRow} 
					/>
				</View>

				<View style={styles.buttonGroupStyle}>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {console.log("tes");}}
							backgroundColor='#ba251d'
						   	icon={{name: 'chevron-left', type:'font-awesome' }}
						   	type='font-awesome'
						   	title='Log Out' />
					</View>

					<View style={styles.buttonStyle}>
						<Button
							style={styles.buttonStyle}
							backgroundColor='#19aa31'
							onPress={() => {console.log("tos");}}
						   	icon={{name: 'chevron-right', type:'font-awesome' }}
						   	type='font-awesome'
						   	title='Bayar !' />
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},

	listStyle: {
		flex: 9
	},

	buttonGroupStyle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	buttonStyle: {
		flex: 1
	}
};

const mapStateToProps = state => {
	const transactions = _.map(state.transactions, (val, uid) => {
		return { ...val, uid};
	});

	return { transactions };
}

export default connect(mapStateToProps, {
	transactionFetch
})(TransactionList);