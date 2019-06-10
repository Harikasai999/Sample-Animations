/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import { Icon, Text } from "native-base";
type Props = {};
export default class CollapseHeader extends Component<Props> {
  render() {
    const {
      renderHeaderStyle,
      renderHeaderTextStyle,
      renderHeaderIcon,
      isIcon,
      nonCollapsedIcon,
      collapsedIcon,
      item,
      expanded
    } = this.props;
    return (
      <View>
        {isIcon ? (
          <View style={renderHeaderStyle}>
            <Text style={renderHeaderTextStyle}>{item.header}</Text>
            {expanded ? (
              <Icon style={renderHeaderIcon} name={nonCollapsedIcon} />
            ) : (
              <Icon style={renderHeaderIcon} name={collapsedIcon} />
            )}
          </View>
        ) : (
          <View style={renderHeaderStyle}>
            <Text style={renderHeaderTextStyle}>{item.header}</Text>
          </View>
        )}
      </View>
    );
  }
}
