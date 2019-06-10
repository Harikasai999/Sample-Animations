import React, { Component } from "react";
import { Text } from "native-base";
export default class TextComp extends Component {
  render() {
    const { textStyles, text } = this.props;
    return <Text style={textStyles}>{text}</Text>;
  }
}
