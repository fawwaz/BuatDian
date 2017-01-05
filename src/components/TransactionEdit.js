import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { transactionUpdate, transactionSave, transactionDelete } from '../actions';
import TransactionForm from './TransactionForm';
import { Confirm } from  './commons';

class TransactionEdit extends Component{
	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.transaction, (value, prop) => {
			this.props.transactionUpdate({ prop, value });
		});
	}

	onDeletePressed() {
		this.setState({ showModal: true });
	}

	onSubmitButtonPressed() {
		const { nama_barang, kode_barang, jumlah_barang } = this.props;
		this.props.transactionSave({ nama_barang, kode_barang, jumlah_barang, uid: this.props.transaction.uid })
	}

	onDecline() {
		this.setState({ showModal: false });	
	}

	onAccept() {
		const { uid } = this.props.transaction;
		
		this.props.transactionDelete({ uid });
	}

	render() {
		return (
			<View>
				<Text>{this.props.nama_barang}</Text>
				<FormLabel>Jumlah</FormLabel>
				<FormInput 
					onChangeText={value => this.props.transactionUpdate({ prop:'jumlah_barang', value })}
					value={this.props.jumlah_barang}
					keyboardType='numeric'
				/>

				<Button
					backgroundColor='#19aa31'
					onPress={this.onSubmitButtonPressed.bind(this)}
				   	icon={{name: 'edit', type:'font-awesome'}}
				   	title='Simpan' />

				<Button
					backgroundColor='#ba251d'
					onPress={this.onDeletePressed.bind(this)}
				   	icon={{name: 'remove', type:'font-awesome'}}
				   	title='Hapus' />

				<Confirm
					visible={ this.state.showModal }
					onAccept={ this.onAccept.bind(this) }
					onDecline={ this.onDecline.bind(this) }
				>
					Yakin ?
				</Confirm>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	const nama_barang = state.transactionform.nama_barang;
	const kode_barang = state.transactionform.kode_barang;
	const jml_barang  = state.transactionform.jumlah_barang;
	const jumlah_barang = jml_barang.toString();
	

	return { nama_barang, kode_barang, jumlah_barang };
};

export default connect(mapStateToProps,{ 
	transactionUpdate,
	transactionSave,
	transactionDelete
})(TransactionEdit);