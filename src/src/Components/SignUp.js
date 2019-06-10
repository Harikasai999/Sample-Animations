import React, { Component } from "react";
import {
  View,
  StatusBar,
  Text,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import { Content, Input, Item, Button } from "native-base";
const { width, height } = Dimensions.get("window");
import { Images } from "../Themes";
import TextComp from "./Text";
import TextField from "./TextField";
import Header from "./Header";
import ButtonComp from "./ButtonComp";
import styles from "./Styles/SignUpStyles";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "213-824-3234"
    };
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText() {
    this.setState({
      value: this.state.value
    });
  }
  componentWillMount() {
    // alert(Dimensions.get(width));
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topInnerView}>
          <View style={{ flex: 1 }}>
            <Header value={true} />
          </View>
        </View>
        <View style={{ backgroundColor: "black", aspectRatio: 414 / 564 }}>
          <View style={{ flex: 1, backgroundColor: "black" }}>
            <View style={styles.center}>
              <Item regular style={styles.itemView}>
                {/* <Input
                  placeHolder="213-824-3234"
                  placeHolderTextColor="#C7C7C7"
                  onChangeText={this.onChangeText}
                  value={this.state.value}
                  style={{ color: "#C7C7C7", textAlign: "center" }}
                />*/}
                <TextField
                  placeholder="213-824-3234"
                  placeHolderTextColor="#C7C7C7"
                  borderColor="#DC143C"
                  inputValue={this.state.value}
                  inputStyles={{
                    color: "#C7C7C7",
                    textAlign: "center",
                    width: width / 1.84,
                    height: width / 8.8
                  }}
                />
              </Item>
              <View
                style={[
                  styles.center,
                  {
                    marginTop: width / 21.759,
                    width: width / 1.84,
                    height: width / 8.8
                  }
                ]}
              >
                {/* <Button style={styles.buttonView}>
                    <Text style={styles.signText}>signin</Text>
                  </Button>*/}
                <ButtonComp
                  style={styles.buttonView}
                  textStyle={styles.signText}
                  title="signin"
                />
              </View>
              <View
                style={[
                  styles.center,
                  {
                    marginTop: width / 8.808,
                    width: width / 1.84,
                    height: width / 8.8
                  }
                ]}
              >
                {/*<Button style={styles.fbButtonView}>
                  <View style={styles.fbInnerTopView}>
                    <Text style={styles.fbText}>continue with facebook</Text>
                  </View>
                  <View style={styles.fbInnerBottomView}>
                    <Image source={Images.icon} style={styles.forwardIcon} />
                  </View>
                </Button>*/}
                <ButtonComp
                  style={styles.fbButtonView}
                  textStyle={styles.fbText}
                  title="continue with facebook"
                  soure={Images.icon}
                  imageWidth={width / 17.8}
                  imageHeight={width / 16.5}
                  imageStyles={{
                    tintColor: "white"
                  }}
                  image={true}
                />
              </View>
              <View
                style={[
                  styles.center,
                  {
                    marginTop: width / 25.875,
                    width: width / 1.84,
                    height: width / 8.8
                  }
                ]}
              >
                <ButtonComp
                  style={styles.googleButtonView}
                  textStyle={styles.googleText}
                  title="continue with google"
                  soure={Images.icon}
                  imageWidth={width / 17.8}
                  imageHeight={width / 16.5}
                  imageStyles={{
                    tintColor: "white"
                  }}
                  image={true}
                />
                {/*   <Button style={styles.googleButtonView}>
                  <View style={styles.googleLeftView}>
                    <Text style={styles.googleText}>continue with google</Text>
                  </View>
                  <View style={styles.googleRightView}>
                    <Image source={Images.icon} style={styles.forwardIcon} />
                  </View>
                </Button>*/}
              </View>
              <View style={styles.emailView}>
                <TextComp
                  textStyles={styles.emailText}
                  text="sign in with email"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
// <Button
//   style={styles.googleButtonStylesPropsValue}
//   textStyle={styles.googleButtonTextStylesPropsValue}
//   title="continue with google"
//   soure={require("../src/Images/arrowInButton.png")}
//   imageWidth={windowSize.width/19.7}
//   imageHeight={windowSize.width/19.06}
//   imageStyles={{marginTop:windowSize.width/33}}
//   image={true}
//   />
