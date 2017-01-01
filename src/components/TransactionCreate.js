import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { transactionUpdate, transactionCreate } from '../actions';
import TransactionForm from './TransactionForm';

class TransactionCreate extends Component{

	onSubmitButtonPressed() {
		const { nama_barang, kode_barang, jumlah_barang } = this.props;
		this.props.transactionCreate({nama_barang, kode_barang, jumlah_barang});
	}

	render() {
		return(
			<View>
				<TransactionForm {...this.props}/>
				<Button
					onPress={this.onSubmitButtonPressed.bind(this)}
				   	icon={{name: 'cart-plus', type:'font-awesome'}}
				   	title='Simpan' />
			</View>
		);
	}
}

/*
Icon list :
shopping-cart
money (bayar)
minus (kurangi item)
remove, close, times
*/
const mapStateToProps = (state) => {
	const nama_barang = state.transactionform.nama_barang;
	const kode_barang = state.transactionform.kode_barang;
	const jml_barang  = state.transactionform.jumlah_barang;
	const jumlah_barang = jml_barang.toString();
	

	return { nama_barang, kode_barang, jumlah_barang };
};

export default connect(mapStateToProps, { 
	transactionUpdate, 
	transactionCreate 
})(TransactionCreate);
