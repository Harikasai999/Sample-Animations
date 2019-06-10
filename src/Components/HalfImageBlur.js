/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  View,
  Image,
  Text,
  findNodeHandle,
  StyleSheet,
  Dimensions,
  ScrollView,
  InteractionManager,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { BlurView } from "@react-native-community/blur";
const { width, height } = Dimensions.get("window");
type Props = {};
const array = [
  {
    id: "1",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  },
  {
    id: "2",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydKa7Dh07PVap8ydkjYGRRYl1jI_YmxX2bGdB1WD1gb7XICH8wQ"
    }
  },
  {
    id: "3",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcrnWgito6J4J-EmACyiRlPoCW73FZLvwI7bUJk2jWdmMC1z2JQ"
    }
  },
  {
    id: "4",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCbrBNzNVYRK0bLGA9nl89w25d9GOiD0gQc4vIbh0ecMQKte8"
    }
  }
];
export default class HalfImageBlur extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      viewRef: null,
      spinner: true,
      imageNodeHandle: null,
      blurValue: 0
    };
  }

  // imageLoaded() {
  //   let h = findNodeHandle(this.refs.backgroundImage);
  //   console.log("this.refs.backgroundImage", h);
  //   setTimeout(() => this.setState({ viewRef: h }), 500);
  //   // this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  // }

  imageLoaded() {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        const viewRef = findNodeHandle(this._viewRef);
        this.setState({ viewRef }, () => {
          // alert("this.refs.backgroundImage" + this.state.viewRef);
          this.setState({
            spinner: false
          });
        });
      }, 250);
    });
  }
  componentDidMount() {
    // InteractionManager.runAfterInteractions(() => {
    //   setTimeout(() => {
    //     const viewRef = findNodeHandle(this._viewRef);
    //     this.setState({ viewRef });
    //   }, 250);
    // });
    this.setState({
      blurValue: 2
    });
  }
  onImageRef = (ref: Image) => {
    this._imageRef = ref;
  };

  onImageLoad = () => {
    this.setState({
      imageNodeHandle: findNodeHandle(this._imageRef)
    });
  };
  render() {
    // if (this.state.spinner) {
    //   return <ActivityIndicator size="large" color="black" />;
    // } else {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*array.map((res, key) => {
          return (
            <View style={styles.container} key={key}>
              <Image
                ref={ref => (this._viewRef = ref)}
                source={{
                  uri: res.photo.uri
                }}
                style={{
                  height: height / 3.5,
                  width: width
                }}
                onLoadEnd={this.imageLoaded.bind(this)}
              />
              <View
                style={{
                  position: "absolute",
                  top: height / 5,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
                pointerEvents={"none"}
              >
                <BlurView
                  style={StyleSheet.absoluteFillObject}
                  viewRef={this.state.viewRef}
                  blurType="light"
                  blurAmount={2}
                  // downsampleFactor={5}
                  // blurRadius={3}
                  // overlayColor={"rgba(255, 255, 255, .25)"}
                />
              </View>
            </View>
          );
        })*/}
        <View style={{ marginTop: 10, overflow: "hidden" }}>
          <Image
            ref={this.onImageRef}
            onLoadEnd={this.onImageLoad}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcrnWgito6J4J-EmACyiRlPoCW73FZLvwI7bUJk2jWdmMC1z2JQ"
            }}
            style={{ width: width, height: height / 3 }}
          />
          {(Platform.OS === "ios" ||
            (this.state && this.state.imageNodeHandle !== null)) && (
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 100,
                left: 0,
                right: 0,
                overflow: "hidden"
                // backgroundColor: "pink"
              }}
            >
              <ImageBackground
                // ref={this.onImageRef}
                // onLoadEnd={this.onImageLoad}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcrnWgito6J4J-EmACyiRlPoCW73FZLvwI7bUJk2jWdmMC1z2JQ"
                }}
                style={{ width: width, height: height / 3 }}
                blurRadius={2}
              />
              {/*<BlurView
                blurType={"light"}
                blurAmount={4}
                style={[StyleSheet.absoluteFillObject]}
                viewRef={this.state.imageNodeHandle}
                // resizeMode={"cover"}
              />*/}
            </View>
          )}
        </View>
      </ScrollView>
    );
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
    // justifyContent: "center",
    // alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: height / 5,
    left: 0,
    bottom: 0,
    right: 0
    // backgroundColor: "pink"
  }
});
