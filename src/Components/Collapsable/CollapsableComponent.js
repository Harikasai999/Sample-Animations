import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Icon, Accordion, Text } from "native-base";

import CollapseHeader from "./CollapseHeader";
import CollapseContent from "./CollapseContent";
export default class CollapsableComponent extends Component {
  _renderHeader(item, expanded) {
    const {
      renderHeaderStyle,
      renderHeaderTextStyle,
      renderHeaderIcon,
      isIcon,
      nonCollapsedIcon,
      collapsedIcon
    } = this.props;
    return (
      <CollapseHeader
        renderHeaderStyle={renderHeaderStyle}
        renderHeaderTextStyle={renderHeaderTextStyle}
        renderHeaderIcon={renderHeaderIcon}
        isIcon={isIcon}
        nonCollapsedIcon={nonCollapsedIcon}
        collapsedIcon={collapsedIcon}
        item={item}
        expanded={expanded}
      />
    );
  }
  _renderContent(item) {
    const { contentStyle, animationType } = this.props;
    return (
      <CollapseContent
        contentStyle={contentStyle}
        animationType={animationType}
        item={item}
      />
    );
  }
  render() {
    const { dataArray } = this.props;
    return (
      <View style={styles.container}>
        <Accordion
          dataArray={dataArray}
          expanded={true}
          renderHeader={this._renderHeader.bind(this)}
          renderContent={this._renderContent.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
