import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CollapsableComponent from "../Components/Collapsable/CollapsableComponent";

const dataArray = [
  {
    header: "First Element",
    content:
      "To make your animations globally available by referring to them by a name, you can register them with initializeRegistryWithDefinitions. This function can also be used to replace built in animations in case you want to tweak some value."
  },
  {
    header: "Second Element",
    content:
      "To make your animations globally available by referring to them by a name, you can register them with initializeRegistryWithDefinitions. This function can also be used to replace built in animations in case you want to tweak some value."
  },
  {
    header: "Third Element",
    content:
      "To make your animations globally available by referring to them by a name, you can register them with initializeRegistryWithDefinitions. This function can also be used to replace built in animations in case you want to tweak some value."
  }
];

export default class CollapsableList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CollapsableComponent
          dataArray={dataArray}
          contentStyle={styles.contentStyle}
          renderHeaderStyle={styles.renderHeaderStyle}
          renderHeaderTextStyle={styles.renderHeaderTextStyle}
          renderHeaderIcon={styles.renderHeaderIcon}
          isIcon={true}
          collapsedIcon={"add-circle"}
          nonCollapsedIcon={"remove-circle"}
          animationType={"zoomIn"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentStyle: {
    backgroundColor: "#e3f1f1",
    padding: 10
    // fontStyle: "italic"
  },
  renderHeaderStyle: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "darkcyan"
  },
  renderHeaderTextStyle: { fontWeight: "600", color: "white" },
  renderHeaderIcon: { fontSize: 18, color: "white" }
});
