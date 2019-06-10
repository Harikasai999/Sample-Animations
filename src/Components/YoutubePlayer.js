/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Text, FlatList } from "react-native";
import YouTube from "react-native-youtube";
type Props = {};

export default class YoutubePlayer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: false,
      quality: "",
      error: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          apiKey="AIzaSyAS4p0oObdfjDZE7ta3UNb7i7Ao3MygICs"
          // origin="https://www.youtube.com/watch?v=62rfTxvnTgk"
          videoId={this.props.item.youtubeId} // The YouTube video ID
          play={false} // control playback of video with true/false
          // fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{
            alignSelf: "center",
            height: 300,
            backgroundColor: "pink",
            width: "100%"
          }}
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
