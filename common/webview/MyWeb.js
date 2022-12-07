import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default class MyWeb extends React.Component {

  
  render() {

    return (
      <View style={styles.container}>
        <WebView
          source={{uri: 'https://www.youtube.com/embed/MhkGQAoc7bc'}}
          style={styles.video}
          startInLoadingState
      
        />
        <WebView
          source={{uri: 'https://www.youtube.com/embed/PGUMRVowdv8'}}
          style={styles.video}
          startInLoadingState
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});