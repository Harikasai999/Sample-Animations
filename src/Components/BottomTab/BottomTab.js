//Use react-native-material-ui module for Bottom Tabs
// Use react-native-vector-icons module for Icons
import React, { Component } from "react";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BottomNavigation } from "react-native-material-ui";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home"
    };
    this.onChangeTab = this.onChangeTab.bind(this)
  }
  //To changing the tabs
  onChangeTab(res) {
    this.setState({ active: res.key }, () => {
      //passing the tabs index to parent
      this.props.getTabIndex(this.state.active)
    })
  }
  render() {
    const { iconDisplay,
      activeContainerColor,
      inActiveContainerColor,
      activeIconSize,
      inActiveIconSize,
      activeIconColor,
      inActiveIconColor,
      imageDisplay, activeImageSize,
      inActiveImageSize } = this.props
    return (
      <View style={{ flex: 1 }}>
        <BottomNavigation
          active={this.state.active}
          hidden={false}
          style={{ container: this.props.mainContainerStyle }}
        >{this.props.tabsArray.map((res, key) => {
          return (
            <BottomNavigation.Action
              key={res.key}
              // label={res.label}
              icon={iconDisplay ? <Icon name={res.icon}/> : <Image source={res.image} />}
              onPress={() => this.onChangeTab(res)}
              style={{
                container: {
                  minWidth: null, backgroundColor:
                    this.state.active === res.key ? activeContainerColor : inActiveContainerColor
                }, icon: iconDisplay ? {
                  fontSize: this.state.active === res.key ? activeIconSize : inActiveIconSize,
                  color: this.state.active === res.key ? activeIconColor : inActiveIconColor
                } : {
                    height: this.state.active === res.key ? activeImageSize : inActiveImageSize,
                    width: this.state.active === res.key ? activeImageSize : inActiveImageSize,
                    tintColor: this.state.active === res.key ? activeIconColor : inActiveIconColor,
                  }
              }}

            />
          )
        })}
        </BottomNavigation>
      </View>
    );
  }
}
