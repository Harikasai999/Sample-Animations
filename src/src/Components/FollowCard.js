import React, { Component } from "react";
import {
  View,
  FlatList,
  Dimensions,
  Text,
  ImageBackground,
  SafeAreaView
} from "react-native";
const { width, height } = Dimensions.get("window");
import { Content } from "native-base";
import TextComp from "./Text";
import TopGames from "./TopGames";
import Follow from "./Follow";
import { Constants, Images } from "../Themes";
import RollCard from "./RollCard";
export default class FollowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ height: width / 6.272, backgroundColor: "#DC143C" }} />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.2, backgroundColor: "black" }}>
            <RollCard toptitle="top games to follow" bottomtitle="view all" />
          </View>
          <View style={{ flex: 0.8, backgroundColor: "green" }} />
          {/*<View
            style={{
              flex: 0.3,
              marginTop: width / 31.84,
              backgroundColor: "black"
            }}
          >
            <RollCard toptitle="players to follow" bottomtitle="view all" />
          </View>
          <View
            style={{
              flex: 0.4,
              marginTop: width / 31.84,
              backgroundColor: "black"
            }}
          >
            <Follow />
          </View>*/}
        </View>
        {/*<View style={{ height: width / 7.392, backgroundColor: "white" }} />
        <View
          style={{
            height: width / 5.594,
            backgroundColor: "black",
            bottom: 0
          }}
        />*/}
      </View>
    );
  }
}
{
  /*<ImageBackground
  source={require("../Images/s.png")}
  style={{ width: "100%", height: "100%" }}
>*/
}
{
  /*</ImageBackground>*/
}
{
  /*<View style={{ marginTop: width / 19.71, marginLeft: width / 20.7 }}>
  <TextComp
    textStyles={{ color: "green", fontSize: width / 30.659 }}
    text="top games to follow"
  />
</View>
<FlatList
  showsHorizontalScrollIndicator={false}
  style={{ marginTop: width / 29.57, marginLeft: width / 27.6 }}
  horizontal={true}
  data={this.state.data}
  extraData={this.state}
  renderItem={this._renderItem}
/>
<View style={{ marginBottom: width / 20, marginLeft: width / 23 }}>
  <TextComp
    textStyles={{ color: "white", fontSize: width / 20.7 }}
    text="view all"
  />
</View>*/
}
