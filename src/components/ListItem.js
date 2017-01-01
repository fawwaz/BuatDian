import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component{
	onRowPress() {
		Actions.transactionEdit({ transaction: this.props.transaction });
	}

	render() {
		const { nama_barang } = this.props.transaction;

		return(
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<Text>
						{nama_barang}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ListItem;