// import React, { Component } from "react";
// import { Button } from "native-base";
// import TextComp from "./Text";
// import styles from "./Styles/ButtonStyles";
// import { View } from "react-native";
// import ImageComponent from "./ImageComponent";
//
// export default class ButtonComp extends Component {
//   static defaultProps = {
//     iconAlign: "right",
//     width: "75%",
//     // backgroundColor: "black",
//     textAlign: "center"
//   };
//
//   render() {
//     const {
//       textStyles,
//       iconAlign,
//       backgroundColor,
//       width,
//       text,
//       imageSource,
//       imageHeight,
//       imageWidth,
//       onPress
//     } = this.props;
//     const buttonStyles = [styles.button, { backgroundColor, width }];
//     const buttonAlignment = iconAlign;
//     return (
//       <View style={styles.buttonContainer}>
//         <Button
//           buttonAlignment={buttonAlignment}
//           style={buttonStyles}
//           onPress={onPress}
//         >
//           <View style={styles.textContainer}>
//             {text && <TextComp textStyles={textStyles} text={text} />}
//           </View>
//           <View style={styles.buttonIcon}>
//             {imageSource && (
//               <ImageComponent
//                 imageSoure={imageSource}
//                 width={imageWidth}
//                 height={imageHeight}
//               />
//             )}
//           </View>
//         </Button>
//       </View>
//     );
//   }
// }
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import ImageComponent from "./ImageComponent";
const { width, height } = Dimensions.get("window");
import Text from "./Text";
var windowSize = Dimensions.get("window");
export default class ButtonComp extends Component {
  render() {
    return this.props.image === true ? (
      <View style={styles.container}>
        <TouchableOpacity style={this.props.style} onPress={this.props.method}>
          <View style={styles.buttonViewDivision}>
            <View style={styles.textInImageButton}>
              <Text
                text={this.props.title}
                textStyles={[
                  this.props.textStyle,
                  { marginRight: windowSize.width / 41.4 }
                ]}
              />
            </View>
            <View style={styles.imageViewInImageButton}>
              <ImageComponent
                imageSoure={this.props.soure}
                style={this.props.imageStyles}
                width={this.props.imageWidth}
                height={this.props.imageHeight}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.container}>
        <TouchableOpacity style={this.props.style} onPress={this.props.method}>
          <Text text={this.props.title} textStyles={this.props.textStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  buttonViewDivision: {
    flex: 1,
    flexDirection: "row"
  },
  textInImageButton: {
    flex: 0.87,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  imageViewInImageButton: {
    flex: 0.13,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
