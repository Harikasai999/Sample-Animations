/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions
} from "react-native";
import YouTube from "react-native-youtube";
var { width, height } = Dimensions.get("window");
//import YoutubePlayer from "../Components/YoutubePlayer.js";
type Props = {};
var array = [
  {
    id: 1,
    title: "React-Native",
    youtubeId: "62rfTxvnTgk"
  },
  {
    id: 2,
    title: "Reactjs",
    youtubeId: "eofpZPRUnP8"
  },
  {
    id: 3,
    title: "HTML",
    youtubeId: "bWPMSSsVdPk"
  },
  {
    id: 4,
    title: "JS",
    youtubeId: "Ukg_U3CnJWI"
  },
  {
    id: 5,
    title: "iOS",
    youtubeId: "bFoLlwuzAtk"
  },
  {
    id: 6,
    title: "Android",
    youtubeId: "g9YblXBQ5uU"
  }
];
export default class YoutubeList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: false,
      quality: "",
      error: ""
    };
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        {/* <YouTube
          apiKey="AIzaSyAS4p0oObdfjDZE7ta3UNb7i7Ao3MygICs"
          // origin="https://www.youtube.com/watch?v=62rfTxvnTgk"
          videoId={item.youtubeId} // The YouTube video ID
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
        <YoutubePlayer item={item} />*/}
      </View>
    );
  };
  _keyExtractor = (item, index) => item.id;
  render() {
    return (
      <View style={styles.container}>
        {/*  <FlatList
          data={array}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />*/}
        <YouTube
          apiKey="AIzaSyAS4p0oObdfjDZE7ta3UNb7i7Ao3MygICs"
          // origin="https://www.youtube.com/watch?v=62rfTxvnTgk"
          videoId={"62rfTxvnTgk"} // The YouTube video ID
          play={false} // control playback of video with true/false
          // fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{
            alignSelf: "center",
            height: width / 1.87,
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
