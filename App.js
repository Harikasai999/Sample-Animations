/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
// import FollowCard from "./src/Components/FollowCard.js";
import Main from "./src/Containers/Main.js";
import HalfBlur from "./src/Containers/HalfBlur.js";
import SwiperImages from "./src/Containers/SwiperImages.js";
import YoutubeList from "./src/Containers/YoutubeList.js";
import VideoPlayer from "./src/Containers/VideoPlayer.js";
import WebViewVideoPlayer from "./src/Containers/WebViewVideoPlayer.js";
import VideoTypes from "./src/Containers/VideoTypes.js";
import CollapsableList from "./src/Containers/CollapsableList.js";
import Calendars from "./src/Containers/Calendars.js";
import Buttons from "./src/Containers/Buttons.js";
import Home from "./src/Containers/Home.js";
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="lightgrey" barStyle="light-content" />
        <Router>
          <Stack key="root">
            {/*  <Scene
              key="FollowCard"
              component={FollowCard}
              // title="FollowCard"
              hideNavBar={true}
              initial
            />*/}
            <Scene
              key="SwiperImages"
              component={SwiperImages}
              title="SwiperImages"
              // initial
            />
            <Scene
              key="Home"
              component={Home}
              title="Home"
              initial
            />
            <Scene
              key="Buttons"
              component={Buttons}
              title="Buttons"
              // initial
            />
            <Scene
              key="Calendars"
              component={Calendars}
              title="Calendars"
              // initial
            />
            <Scene
              key="CollapsableList"
              component={CollapsableList}
              title="Collapsable List"
              // initial
            />
            <Scene
              key="VideoTypes"
              component={VideoTypes}
              title="Effects"
              //initial
            />
            <Scene
              key="HalfBlur"
              component={HalfBlur}
              title="HalfBlur"
              // initial
            />
            <Scene
              key="WebViewVideoPlayer"
              component={WebViewVideoPlayer}
              title="Twitch Video Player"
            />
            <Scene
              key="YoutubeList"
              component={YoutubeList}
              title="Youtube Player"
            />
            <Scene key="Main" component={Main} title="Animations" />
          </Stack>
        </Router>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  }
});
