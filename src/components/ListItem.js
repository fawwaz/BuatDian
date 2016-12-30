import React, { Component } from 'react';
import { Text } from 'react-native';

class ListItem extends Component{
	render() {
		const { nama_barang } = this.props.transaction;

		return(
			<Text style={styles.titleStyle}>
				{nama_barang}
			<Text>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

export default ListItem;