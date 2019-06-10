/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import * as Animatable from "react-native-animatable";
type Props = {};
export default class CollapseContent extends Component<Props> {
  render() {
    const { contentStyle, animationType, item } = this.props;
    return (
      <Animatable.Text
        animation={animationType}
        style={this.props.contentStyle}
      >
        {item.content}
      </Animatable.Text>
    );
  }
}
