import React, { Component } from "react";
import { Input } from "native-base";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./Styles/TextFieldStyles";
import { Colors } from "../Themes";

export default class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.inputValue
    };

    this.input = React.createRef();
  }

  render() {
    const {
      placeholder,
      inputStyles,
      itemStyles,
      borderColor,
      keyboardType,
      placeHolderTextColor,
      onSubmitEditing
    } = this.props;
    const { inputValue } = this.state;
    const computedStyles = [styles.inputStyles, inputStyles];
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inputContainer}>
          <Input
            ref={this.input}
            style={computedStyles}
            value={inputValue}
            placeholderTextColor={placeHolderTextColor}
            onChangeText={inputValue => this.setState({ inputValue })}
            placeholder={placeholder}
            keyboardType={keyboardType}
            borderColor={borderColor}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
