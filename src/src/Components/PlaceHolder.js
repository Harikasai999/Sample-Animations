import React, { Component } from "react";
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get("window");
import Images from "../Themes";
export default class PlaceHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { placeHolderStyles} = this.props;
    return (
     
      <View style={placeHolderStyles} />
   
    );
  }
}

