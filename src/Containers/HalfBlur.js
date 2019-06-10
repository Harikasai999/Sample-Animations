import React, { Component } from "react";
import {
  View,
  findNodeHandle,
  InteractionManager,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
// Android caveats:
// - iOS doesn't seem to need all the viewRef state wiring but Android does
// - On Android, Edges of component with attached ref do not blur, but on iOS they do (Android clips all subviews). If blurred edges are desired, the blurred-edge view must be a child of the view with ref set. (see screenshots below)
// - For Images contained within a View background color must be applied to view. Transparent works but Android displays both BlurView and underlying Image, so opacity: 0 should be set on the underlying image to prevent both blur and non-blur from displaying ..

// See screenshots of clipped edge on android:
// ios: https://i.imgur.com/vT7bBm2.png
// android: https://i.imgur.com/dVevzeM.png

class HalfBlur extends Component {
  state = {
    viewRef: null
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        const viewRef = findNodeHandle(this._viewRef);
        this.setState({ viewRef });
      }, 250);
    });
  }
  renderBlurChilds() {
    return (
      <ImageBackground
        // ref={this.onImageRef}
        // onLoadEnd={this.onImageLoad}
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcrnWgito6J4J-EmACyiRlPoCW73FZLvwI7bUJk2jWdmMC1z2JQ"
        }}
        style={{ width: width, height: height / 3 }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.5 }} />
          <View style={{ flex: 0.5, backgroundColor: "pink" }} />
        </View>
      </ImageBackground>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          // ref={this.onImageRef}
          // onLoadEnd={this.onImageLoad}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcrnWgito6J4J-EmACyiRlPoCW73FZLvwI7bUJk2jWdmMC1z2JQ"
          }}
          style={{ width: width, height: height / 3 }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.5 }} />
            <View
              style={{
                flex: 0.5,
                backgroundColor: "pink",
                opacity: 0.5
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HalfBlur;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  instructions2: {
    textAlign: "center",
    color: "white",
    marginBottom: 5
  }
});
