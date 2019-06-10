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
  TouchableOpacity,
  Modal,
  Dimensions,
  FlatList
} from "react-native";
import { Actions } from "react-native-router-flux";
var { height, width } = Dimensions.get("window");
type Props = {};
var array = [
  {
    id: 1,
    title: "dreamhackcs"
  },
  {
    id: 2,
    title: "jovirone"
  },
  {
    id: 3,
    title: "cigarettestv"
  },
  {
    id: 4,
    title: "elementlolz"
  },
  {
    id: 5,
    title: "kndprofessor"
  },
  {
    id: 6,
    title: "pescocofino"
  },
  {
    id: 7,
    title: "solaryfortnite"
  },
  {
    id: 8,
    title: "kukiipupii"
  },
  {
    id: 9,
    title: "viperdemon"
  },
  {
    id: 10,
    title: "starladder_cs_en"
  }
];
export default class VideoTypes extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  modalVisible() {
    this.setState({ modalVisible: true });
  }
  closeModal() {
    this.setState({ modalVisible: false });
  }
  onItem(item) {
    this.closeModal();
    Actions.push("WebViewVideoPlayer", { item });
  }
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onItem.bind(this, item)}>
        <View
          style={{
            height: 50,
            borderBottomWidth: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  _keyExtractor = (item, index) => item.id;
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Actions.push("YoutubeList")}
        >
          <Text style={styles.textStyle}>Youtube Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { marginTop: 10 }]}
          onPress={this.modalVisible.bind(this)}
        >
          <Text style={styles.textStyle}>Twitch Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { marginTop: 10 }]}
          onPress={() => Actions.push("Main")}
        >
          <Text style={styles.textStyle}>Images with Effects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { marginTop: 10 }]}
          onPress={() => Actions.push("CollapsableList")}
        >
          <Text style={styles.textStyle}>Collapsable List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { marginTop: 10 }]}
          onPress={() => Actions.push("Calendars")}
        >
          <Text style={styles.textStyle}>Calendars</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { marginTop: 10 }]}
          onPress={() => Actions.push("Buttons")}
        >
          <Text style={styles.textStyle}>Buttons</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              backgroundColor: "#0e0e0e8c",
              height: height,
              width: width,
              justifyContent: "center"
            }}
          >
            <View
              style={{
                margin: 20,
                backgroundColor: "white",
                borderRadius: 5
              }}
            >
              <FlatList
                data={array}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />

              <TouchableOpacity
                onPress={this.closeModal.bind(this)}
                style={[
                  styles.buttonStyle,
                  { alignSelf: "center", marginTop: 20, marginBottom: 20 }
                ]}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    height: 50,
    borderRadius: 5,
    width: 250,
    backgroundColor: "darkcyan",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  },
  itemText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600"
  }
});
