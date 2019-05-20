
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';

const { AdIconView, AdMediaView, AdTriggerView} = FacebookAds;


class AdComponent extends React.Component {
  render() {
    let {width, height} = Dimensions.get('window');
    return (
      <View>
      <AdIconView />
         <AdMediaView style={{width: width, height:189}} />
         <Text>{this.props.nativeAd.advertiserName}</Text>
         <Text>{this.props.nativeAd.description}</Text>
         <Text>{this.props.nativeAd.headline}</Text>
         <Text>{this.props.nativeAd.bodyText}</Text>
         <Text>{this.props.nativeAd.advertiserName}</Text>
         <Text>{this.props.nativeAd.callToActionText}</Text>
        <Text>pruebas</Text>
      </View>

    );
  }
}

export default FacebookAds.withNativeAd(AdComponent);
