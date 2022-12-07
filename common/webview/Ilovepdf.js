import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default class Ilovepdf extends React.Component {
  onNavigationStateChangehandler=({url})=> {
    console.log(url)
    if(url !=='https://www.ilovepdf.com/jpg_to_pdf'){
      this.webref.stopLoading();
    }
  }
  
  render() {
    return <WebView source={{ uri: 'https://www.ilovepdf.com/jpg_to_pdf' }} 
    ref={r => this.webref=r }
    onNavigationStateChange={this.onNavigationStateChangehandler}
    startInLoadingState
    />;
  }
}