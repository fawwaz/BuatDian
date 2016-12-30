import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
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
			<ListView 
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	const transactions = _.map(state.transactions, (val, uid) => {
		return { ...val, uid};
	});

	return { transactions };
}

export default connect(mapStateToProps, {
	transactionFetch
})(TransactionList);