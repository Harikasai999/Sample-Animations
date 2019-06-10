import React, { Component } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import TextComp from "./Text";
import PlaceHolder from "./PlaceHolder";
import styles from "./Styles/CardStyles";
const { width, height } = Dimensions.get("window");
import ImageComponent from "./ImageComponent";
import { Card } from "native-base";
import Images from "../Themes/Images";
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.item,
      selected: false
    };
    this.onSelected = this.onSelected.bind(this);
  }
  componentWillMount() {
    // alert("gadhja" + JSON.stringify(this.state.items));
  }
  onSelected() {
    this.setState({
      selected: !this.state.selected
    });
  }
  render() {
    alert("ammuchowdary" + JSON.stringify(this.props.index));
    return (
      <View
        style={[
          styles.mainView,
          { paddingLeft: this.props.index === 0 ? 33 : 10 }
        ]}
      >
        {this.state.selected === false ? (
          <Card
            style={[
              styles.card,
              {
                backgroundColor: "pink"
              }
            ]}
          >
            <TouchableOpacity
              onPress={this.onSelected.bind(this)}
              style={styles.cardView}
            >
              <PlaceHolder placeHolderStyles={styles.imageView} />
              <TextComp
                textStyles={styles.textView}
                text={this.state.items.name}
              />

              <View style={styles.iconView}>
                <ImageComponent
                  imageSoure={Images.checked}
                  height={width / 20.8}
                  width={width / 20.8}
                  style={{ tintColor: "#1D1D1D" }}
                />
              </View>
            </TouchableOpacity>
          </Card>
        ) : (
          <Card
            style={[
              styles.card,
              {
                backgroundColor: "pink"
              }
            ]}
          >
            <TouchableOpacity onPress={this.onSelected.bind(this)}>
              <View style={styles.cardsView}>
                {/*<View style={styles.imageView} />*/}
                <PlaceHolder placeHolderStyles={styles.imageView} />
                <TextComp
                  textStyles={styles.textView}
                  text={this.state.items.name}
                />

                <View style={styles.iconView}>
                  <ImageComponent
                    imageSoure={Images.check}
                    height={width / 20.8}
                    width={width / 20.8}
                    style={{ tintColor: "#DC143C" }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Card>
        )}
      </View>
    );
  }
}
