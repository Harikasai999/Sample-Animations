import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  textView: {
    color: "white",
    fontWeight: "800",
    // fontFamily: "Roboto-Regular",
    //backgroundColor: "red",
    //fontSize: 0.78125,
    fontSize: width / 30,
    marginLeft: width / 19.72
    // paddingLeft: width / 20
  },
  list: {
    marginLeft: width / 19.7
  }
});
export default styles;
