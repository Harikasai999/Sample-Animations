/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Text, WebView } from "react-native";
import YouTube from "react-native-youtube";
type Props = {};
export default class WebViewVideoPlayer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentWillMount() {
  //   alert(JSON.stringify(this.props.item));
  // }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri: "https://player.twitch.tv/?channel=" + this.props.item.title
          }}
          // style={{ height: 400 }}
          startInLoadingState={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
