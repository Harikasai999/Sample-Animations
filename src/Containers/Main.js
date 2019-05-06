import React, { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
import ButtonAnimation from "../Components/ButtonAnimation";
import ImageAnimation from "../Components/ImageAnimation";
import BlurImage from "../Components/BlurImage";
type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Animations</Text>
        </View>
        <View style={styles.container}>
          <ScrollableTabView
            initialPage={0}
            tabBarActiveTextColor="darkcyan"
            tabBarUnderlineStyle={{ backgroundColor: "darkcyan" }}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <View tabLabel="Buttons">
              <ButtonAnimation />
            </View>
            <View tabLabel="Images">
              <ImageAnimation />
            </View>
            <View tabLabel="Blur Images">
              <BlurImage />
            </View>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkcyan"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  }
});
