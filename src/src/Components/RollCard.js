import React, { Component } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import TextComp from "./Text";
import TopGames from "./TopGames";
const { width, height } = Dimensions.get("window");
export default class RollCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        },
        {
          image: require("../Images/round.png")
        }
      ]
    };
    this._renderItem = this._renderItem.bind(this);
  }
  _renderItem = ({ item, index }) => {
    return <TopGames item={item} index={index} />;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.3,
            // backgroundColor: "cyan",
            justifyContent: "center"
          }}
        >
          <TextComp
            textStyles={{
              color: "white",
              fontWeight: "700",
              fontSize: width / 30.659
            }}
            text={this.props.toptitle}
          />
        </View>
        <View
          style={{
            flex: 0.5,
            // backgroundColor: "yellow",
            justifyContent: "center"
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            // style={{ marginTop: width / 29.57, marginLeft: width / 19.72 }}
            horizontal={true}
            data={this.state.data}
            extraData={this.state}
            renderItem={this._renderItem}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <TextComp
            textStyles={{ color: "#DC143C", fontSize: width / 20.7 }}
            text={this.props.bottomtitle}
          />
        </View>
      </View>
    );
  }
}
