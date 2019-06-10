import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerTopView: {
    flex: 0.63,
    paddingTop: width / 16.56,
    paddingLeft: width / 82.8
  },
  headerBottomView: {
    flex: 0.37,
    justifyContent: "center",
    alignItems: "center"
  },
  backImage: {
    width: width / 12.8,
    height: width / 11.5,
    tintColor: "white",
    marginBottom: width / 8.33
  },
  bView: {
    width: width / 9.39,
    height: width / 9.39,
    backgroundColor: "black",
    borderRadius: width / 7.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -width / 86.5,
    marginLeft: -width / 82.8
  },
  bText: {
    color: "white",
    fontSize: width / 13.259
  },
  gameText: {
    fontSize: width / 12.01,
    color: "white"
  }
});
export default styles;
