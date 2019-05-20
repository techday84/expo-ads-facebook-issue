/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import * as FacebookAds from 'expo-ads-facebook';
const adsManager = new FacebookAds.NativeAdsManager('XXXXXXXXXXXXXXX_XXXXXXXXXXXXXXX', 20);

import {
  Asset,
  Constants,
  FileSystem,
  Permissions,
} from 'react-native-unimodules';

import AdComponent from './components/AdComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentWillMount(){
    FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);
   }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Después de instalar unimodules.</Text>
        <Text style={styles.instructions}>expo-ads-facebook</Text>
        <View>
           <AdComponent adsManager={adsManager} />
         </View>
        <Text style={styles.instructions}>{instructions}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
