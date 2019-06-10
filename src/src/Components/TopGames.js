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
import TextComp from "./Text";
import ImageComponent from "./ImageComponent";
import { Constants, Images } from "../Themes";
export default class TopGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }
  componentWillMount() {
    //  alert(this.props.item);
  }
  render() {
    const { item, index } = this.props;
    return (
      <View style={{ marginLeft: index === 0 ? 0 : 7 }}>
        <View
          style={{
            width: width / 8.448,
            height: width / 8.448,
            borderRadius: width / 8.28,
            backgroundColor: "lightgrey"
            //overFlow: "hidden"
          }}
        >
          <ImageComponent
            imageSoure={item.image}
            width="100%"
            height="100%"
            style={{ tintColor: "grey" }}
          />
        </View>
      </View>
    );
  }
}
