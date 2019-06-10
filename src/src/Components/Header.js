import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import styles from "./Styles/HeaderStyles";
import TextComp from "./Text";
import ImageComponent from "./ImageComponent";
import Images from "../Themes/Images";
export default class Header extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerTopView}>
          {this.props.value === true ? (
            <View style={{ flexDirection: "row" }}>
              {/* <Image source={Images.back} style={styles.backImage} />*/}
              <ImageComponent
                imageSoure={Images.back}
                width={width / 12.8}
                height={width / 11.5}
                style={{ tintColor: "white", marginBottom: width / 8.33 }}
              />
              <View style={styles.bView}>
                {/* <Text style={styles.bText}>B</Text>*/}
                <TextComp textStyles={styles.bText} text="B" />
              </View>
            </View>
          ) : null}
        </View>
        <View style={styles.headerBottomView}>
          <TextComp textStyles={styles.gameText} text="gameizm" />
        </View>
      </View>
    );
  }
}
