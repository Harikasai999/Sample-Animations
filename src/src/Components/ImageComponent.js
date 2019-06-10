import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }
  componentDidMount() {
    const { imageSoure } = this.props;
    var str = this.props.imageSoure;
    var ImageUrl = str.toString().indexOf("http");
    if (ImageUrl !== -1) {
      // it is uesfull for the calculation of height and width based on the constant value (or) get the image original height and width
      Image.getSize(imageSoure, (width, height) => {
        // if we send the width  and not the height then this function will calls
        if (this.props.width && !this.props.height) {
          this.setState({
            width: this.props.width,
            height: height * (this.props.width / width)
          });
        }
        // if we send the  height and not the  width then  this function will calls
        else if (!this.props.width && this.props.height) {
          this.setState({
            width: width * (this.props.height / height),
            height: this.props.height
          });
        }
        // if we send the  height and width then  this function will calls
        else if (this.props.width && this.props.height) {
          this.setState(
            {
              width: this.props.width,
              height: this.props.height
            },
            () => {
              console.log(
                "width:" + this.state.width + "heigth:" + this.state.height
              );
            }
          );
        }
        // if we not send the  height and width then  this function will calls
        else {
          this.setState({ width: width, height: height });
        }
      });
    } else {
      this.setState({
        width: this.props.width,
        height: this.props.height
      });
    }
  }
  render() {
    const { width, height } = this.state;
    const { style, imageSoure } = this.props;
    var image = this.props.imageSoure;
    var ImageUrl = image.toString().indexOf("http");
    return ImageUrl !== -1 ? (
      //alert(JSON.stringify(imageSoure))
      <Image
        source={{ url: imageSoure }}
        style={[style]}
        height={height}
        width={width}
      />
    ) : (
      <Image
        source={imageSoure}
        style={[style]}
        height={height}
        width={width}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
