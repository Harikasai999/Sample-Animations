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
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
type Props = {};
export default class ImagesDetails extends Component<Props> {
  render() {
    console.log("jhdfjkhf", this.props.selectedItem.photo.uri);
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            height: 64,
            alignItems: "flex-end",
            justifyContent: "center",
            marginRight: 10
          }}
        >
          <TouchableOpacity onPress={this.props.onClose}>
            <Icon
              name="close"
              size={30}
              color="white"
              // style={{ alignSelf: "flex-end", marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: this.props.selectedItem.photo.uri
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e0e8a"
  },
  imageContainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: "40%",
    width: "92%"

    // borderRadius: "25%"
  }
});
