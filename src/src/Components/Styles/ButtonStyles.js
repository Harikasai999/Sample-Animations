import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  textContainer: {
    height: width / 23,
    left: 18
    // justifyContent: "center",
    // alignItems: "center"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonIcon: {
    height: width / 18,
    left: 10
  }
});

export default styles;
