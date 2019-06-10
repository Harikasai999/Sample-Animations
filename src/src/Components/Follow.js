import React, { Component } from "react";
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  Dimensions
} from "react-native";
import TextComp from "./Text";
import Cards from "./Cards";
const { width, height } = Dimensions.get("window");
import Constants from "../Themes/Constants";
import styles from "./Styles/FollowStyles";

export default class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Constants.data
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem = ({ item, index }) => {
    // alert("sridevvi" + JSON.stringify(index));
    return (
      <View>
        <Cards item={item} index={index} />
      </View>
    );
  };
  render() {
    return (
      <View style={{ height: 196, backgroundColor: "black", width: "100%" }}>
        <View
          style={{
            height: 55,
            // backgroundColor: "lightgreen",
            // marginTop: width / 18.
            justifyContent: "center"
          }}
        >
          <TextComp textStyles={styles.textView} text="follow your friends" />
        </View>
        <View
          style={{
            height: width / 2.936
            // flex: 0.68,
            // justifyContent: "center",
            // marginTop: 19,
            // backgroundColor: "pink"
          }}
        >
          <FlatList
            // style={{  }}
            horizontal={true}
            data={this.state.data}
            extraData={this.state}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}
