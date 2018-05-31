'use strict';

import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-material-design';

import { colors, styles } from '../Styles';


export default class NavIcon extends Component {
    propTypes: {
        url: PropTypes.string
    }

    render() {
        return (
            <View style={styles.nav_icon}>
                <TouchableOpacity onPress={this.props.action}>
                    <Icon
                        name={this.props.icon}
                        color={colors.nav_text}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

