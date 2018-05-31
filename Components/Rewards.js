import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from '../Components/Button';
import Line from '../Components/Line';
import AvatarTweco from '../Components/AvatarTweco';
import Banner from '../Components/Banner';

const { height, width } = Dimensions.get('window');

export default class Rewards extends Component {
  render() {
    let firstRide;
    if (this.props.firstRide) {
      firstRide = (
        <Text style={styles.text}>
            {'\n'}
            You had your first ride on Twende!
            {'\n'}
        </Text>
      );
    }

    return (
      <View style={styles.page_finalize}>
          <View />
          <View style={styles.text_box}>
              <AvatarTweco />
              <Text style={styles.heavy_text}>
                Boya, you rock!{'\n'}
              </Text>
              {firstRide}
              <Text style={styles.text}>
                Keep up the good work.{'\n'}
              </Text>
              <Line />
              <Text style={styles.tweco_bonus_text}>
                You earned {this.props.rewards} TWC {'\n'}
              </Text>
              <Button
                action={this.props.action}
                style={styles.primary_button_finalize}
                text={'OKAY!'}
              />
          </View>
          <Banner />
      </View>
    );
  }
}

const colors = {
  primary: '#ffda57', // brand book yellow
  secondary: '#273b95', // brand book blue
  text: '#333333',
  button_normal: '#2BA59A',
  box: '#FFFFFF'
};

const styles = StyleSheet.create({
  page_finalize: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
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
    backgroundColor: colors.box
  },
  tweco_bonus_text: {
    fontFamily: 'gothamrounded_medium',
    fontSize: 14,
    color: '#1da69a'
  },
  primary_button_finalize: {
    margin: 10,
    height: 44,
    bottom: 0,
    marginLeft: 44,
    marginRight: 44,
    padding: 10,
    borderRadius: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.button_normal,
    elevation: 2
  },
  heavy_text: {
    fontSize: 20,
    margin: 4,
    fontFamily: 'gothamrounded_medium',
    textAlign: 'center',
    color: colors.secondary
  },
  text: {
    fontFamily: 'gothamrounded_medium',
    fontSize: 14,
    textAlign: 'center',
    color: '#606060'
  },
});
