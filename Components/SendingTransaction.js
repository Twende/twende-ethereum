'use strict';

import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	Dimensions
} from 'react-native';

import Avatar from './Avatar';
import { colors } from '../Styles';

const { height, width } = Dimensions.get('window');

// ----------------------------------------------------------------
// This LoadingComponent should replace LoadingScreen at some point
// ----------------------------------------------------------------

const SendingTransaction = (props) => (
	<View style={styles.loadingContainer}>
		{/* <View style={styles.text_box}> */}
		{props.icon}
		<Text style={styles.text}>{'\n'}{'\n'}{props.textHeader}</Text>
		<Text style={styles.text}>{props.textPayment}</Text>
	</View>
);

const styles = StyleSheet.create({
	text_box: {
    width: width * 0.75,
    height: height * 0.5,
    elevation: 1,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
    marginLeft: 30,
    marginRight: 30,
    marginTop: -10,
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: colors.box
  },
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: colors.box,
    borderRadius: 7
	},
	text: {
		fontFamily: 'gothamrounded_medium',
		fontSize: 14,
		textAlign: 'center',
		color: '#606060'
	},
});

export default SendingTransaction;
