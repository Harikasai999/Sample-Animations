/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import Video from "react-native-video";

type Props = {};
export default class VideoPlayer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      quality: "",
      error: "",

      paused: false,
      currentTime: "",
      duration: ""
    };
  }
  onLoad(data) {
    this.setState({ duration: data.duration });
  }
  onProgress(data) {
    this.setState({ currentTime: data.currentTime });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Video Player</Text>
        <View
          style={{
            margin: 1
          }}
        >
          <Video
            source={{
              uri: "https://player.twitch.tv/?autoplay=false&video=v202120863",
              type: "mp4"
            }}
            rate={1.0}
            volume={1.0}
            paused={this.state.paused}
            muted={false}
            resizeMode="contain"
            onLoad={this.onLoad.bind(this)}
            onProgress={this.onProgress.bind(this)}
            onEnd={() => {
              this.setState({ paused: !this.state.paused });
            }}
            repeat={true}
            playInBackground={false}
            playWhenInactive={false}
            style={styles.backgroundVideo}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    width: 300,
    height: 180
  }
});
