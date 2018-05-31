'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
    } from 'react-native';
import QRCode from 'react-native-qrcode';
// import { observer } from 'mobx-react';

// import { NavIcon, Line } from '../Components';
// import { sendError } from '../Actions/ErrorLogActions';

import '../global';

// @observer
export default class WalletPage extends Component {
    constructor() {
        super();
        this.state = {
            coinbase: '0xdDE962df618926C4AF5167765BE2CBa9F6313925',
            address: '0x31A058a9B81f9A846633304a294b2c1bBa272AE8',
            recipient: '0x250333e532389200Ea4e573949A2316467Ede5d1',
            balance: null,
            tokens: null
        };
    }

    // componentWillMount() {
    //     this.props.walletStore.getTwcBalance(this.state.coinbase);
    //     this.props.walletStore.getEthBalance(this.state.coinbase);
    // }

    // goHome() {
    //         this.props.navigator.pop();
    //         sendError('UI UX', 'User filled out correct phone number in profile page', 'succes');
    // }

    render() {
        return (
            <ScrollView style={styles.scroll_page}>
              <Text> yoooo </Text>
            {/* <NavIcon
                icon={'arrow-back'}
                style={{ backgroundColor: '#ffda57', }}
                // action={() => this.props.navigator.pop()}
            />
            <View style={{ height: 160, paddingTop: 20, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ fontFamily: 'gothamrounded_medium', fontSize: 24, color: colors.secondary }}> */}
                    {/* {this.props.walletStore.balance.twcBalance} TWC */}
                {/* </Text>
                <Text style={{ fontFamily: 'gothamrounded_medium', fontSize: 16, color: colors.secondary, textAlign: 'center' }}> */}
                    {/* {this.props.walletStore.balance.ethBalance} ETH {"\n"} */}
                {/* </Text>
                <Line />
                    <Text style={{ fontFamily: 'gothamrounded_medium', fontSize: 16, color: colors.action, textAlign: 'center' }}> */}
                    {/* Pending Rewards: {this.props.walletStore.balance.twcRewards} TWC {"\n"} */}
                    {/* </Text>

                    <Text style={{ fontFamily: 'gothamrounded_medium', fontSize: 12, color: colors.action, textAlign: 'center' }}>
                        due on 3 june 2019
                    </Text>
            </View> */}
            <View style={styles.sheet}>
                <QRCode
                    value={this.state.coinbase}
                    size={160}
                    color='purple'
                />
                <Text style={{ fontSize: 11, color: 'grey', textAlign: 'center' }}>
                    {"\n"}My Tweco Address: {"\n"}{this.state.coinbase} */}
                </Text>
              </View>
        </ScrollView>
        );
    }
}


const colors = {
    primary_illustrator: '#FFDE17', // brand book yellow
    primary: '#ffda57', // brand book yellow
    primarydark: '#ffd400',
    action: '#1da69a', // brand book green
    secondary: '#273b95', // brand book blue
    disable: '#c2382b', // brand book red
    primary_dark: '#d1af42',
    action_secondary: '#555555', // dark grey
    action_disabled: '#E0E0E0', // light grey
    grey: '#606060', // medium grey
    text: '#333333',
    text_important: '#1da69a', // kan vervangen worden met action
    title: '#4c4c4c',
    border: '#777777',
    nav_text: '#877a42',
    box: '#FFFFFF',
    background: '#f4f4f4',
    error: '#992200', // Dark Red
    box_dark: '#E0E0E0',
    button_normal: '#2BA59A',
    button_over: '#228BE1',
    button_clicked: '#1C79CE',
    button_text: '#FFFFFF',
    star_rating: '#ffeb3b',
    white: '#ffffff',
    rating: '#ffe000'
};

const styles = StyleSheet.create({
    scroll_page: {
        // justifyContent doesn't work with ScrollView
        flex: 1,
        backgroundColor: colors.primary
    },
    sheet: {
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: 200,
        backgroundColor: '#e0e0e0',
        alignItems: 'center'
    },
    textInput: {
        borderColor: 'gray',
        flex: 1,
        fontSize: 15,
        fontFamily: 'gothamrounded_book'
    },
    photoIcon: {
        alignSelf: 'stretch',
        marginTop: -45,
        marginBottom: -15,
        elevation: 5
    },
    phoneContainer: {
        flexDirection: 'row',
        borderColor: 'gray',
        flex: 1,
        margin: 6
    },
    phoneInitial: {
        fontSize: 15,
        fontFamily: 'gothamrounded_book',
        flex: 0.5,
        color: colors.action_secondary,
    },
    PhoneCountryCode: {
        fontSize: 15,
        fontFamily: 'gothamrounded_book',
        width: 40
    },
    phoneNumber: {
        fontSize: 15,
        fontFamily: 'gothamrounded_book',
        flex: 10,
        color: colors.action_secondary
    },
    phoneInputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 2,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        margin: 3,
        marginBottom: 6,
        marginTop: 6,
        borderColor: 'black'
    },
    buttonStyle: {
        marginBottom: 2,
        marginTop: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: colors.grey,
        top: 0,
        bottom: 20,
        height: 40,
        padding: 8,
        borderRadius: 4,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: colors.action,
        elevation: 2
    },
});
