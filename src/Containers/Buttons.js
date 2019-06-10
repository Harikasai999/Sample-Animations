import React, { Component } from "react";
import { View, TouchableNativeFeedback, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Body,
  Right,
  Title,
  Footer
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import BottomTab from "../Components/BottomTab/BottomTab"
var array = [
 
  {
    key: "home",
    icon: "home",
    label: "Home",
    image:require("../Images/home.png")
  }, {
    key: "share",
    icon: "share",
    label: "Share",
    image:require("../Images/share.png")
  }, 
  {
    key: "person",
    icon: "person",
    label: "Person",
    image:require("../Images/user.png")
  },
  {
    key: "notifications",
    icon: "notifications",
    label: "Notifications",
    image:require("../Images/notification.png")
  }, 
  {
    key: "favorite",
    icon: "favorite",
    label: "Favorite",
    image:require("../Images/heartFill.png")
  }, 
  {
    key: "settings",
    icon: "settings",
    label: "Settings",
    image:require("../Images/settings.png")
  }
]
export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "today"
    };
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <View style={{ borderRadius: 50, width: 42, height: 42 }}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("#fff", true)}
              >
                <View
                  style={{
                    width: 42,
                    height: 42,
                    backgroundColor: "transparent",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Icon name="menu" style={{ color: "#fff" }} />
                </View>
              </TouchableNativeFeedback>
            </View>
          </Left>
          <Body>
            <Title>My App</Title>
          </Body>
          <Right>
            <Button transparent rounded>
              {/* <Icon name="ios-chatbubbles" /> */}
            </Button>
          </Right>
        </Header>
        <Content>
          <Button full light>
            <Text>Light</Text>
          </Button>
          <Button full>
            <Text>Primary</Text>
          </Button>
          <Button full success>
            <Text>Success</Text>
          </Button>
          <Button full info>
            <Text>Info</Text>
          </Button>
          <Button full warning>
            <Text>Warning</Text>
          </Button>
          <Button full danger>
            <Text>Danger</Text>
          </Button>
          <Button full dark>
            <Text>Dark</Text>
          </Button>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("white", true)}
          // style={{
          //   width: 250,
          //   height: 45
          // }}
          >
            <View
              style={{
                width: 250,
                height: 45,
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                overflow: "hidden"
              }}
            >
              <Text style={{ color: "white" }}>Ripple Button</Text>
            </View>
          </TouchableNativeFeedback>
        </Content>
       <Footer>
          <BottomTab
            iconDisplay={false}
            tabsArray={array}
            mainContainerStyle={{ backgroundColor: "black" }}
            activeContainerColor={"#FAD002"}
            inActiveContainerColor={"black"}
            activeIconColor={"black"}
            inActiveIconColor={"#FAD002"}
            activeIconSize={25}
            inActiveIconSize={20} 
            activeImageSize={20}
            inActiveImageSize={15} 
            imageDisplay={true}/>
       </Footer>
      </Container>
    );
  }
}
