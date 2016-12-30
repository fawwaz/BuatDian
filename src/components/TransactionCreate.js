import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { transactionUpdate, transactionCreate } from '../actions';

class TransactionCreate extends Component{
	onScanButtonPressed() {

	}

	onSubmitButtonPressed() {
		console.log("ahaay");
		const { nama_barang, kode_barang, jumlah_barang } = this.props;

		this.props.transactionCreate({nama_barang, kode_barang, jumlah_barang});
	}

	render() {
		return(
			<View>
				<FormLabel>Kode Barang</FormLabel>
				<FormInput 
					onChangeText={value => this.props.transactionUpdate({ prop:'kode_barang', value })}
					value={this.props.kode_barang}
				/>

				<FormLabel> Nama Barang </FormLabel>
				<FormInput 
					onChangeText={value => this.props.transactionUpdate({ prop:'nama_barang', value })}
					value={this.props.nama_barang}
				/>
				<Button
					onPress={this.onScanButtonPressed.bind(this)}
				   	icon={{name: 'barcode', type:'font-awesome' }}
				   	type='font-awesome'
				   	title='Scan Item' />

				<FormLabel>Jumlah</FormLabel>
				<FormInput 
					onChangeText={value => this.props.transactionUpdate({ prop:'jumlah_barang', value })}
					value={this.props.jumlah_barang}
				/>
				
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
