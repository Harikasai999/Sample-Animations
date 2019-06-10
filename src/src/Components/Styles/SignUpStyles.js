import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  topInnerView: {
    aspectRatio: 414 / 175,
    backgroundColor: "#DC143C"
  },
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
  },
  itemView: {
    // width: width / 1.84,
    height: width / 8.8,
    marginTop: width / 2.705,
    borderColor: "#DC143C",
    borderRadius: 4,
    backgroundColor: "white"
  },
  buttonView: {
    width: width / 1.84,
    height: width / 8.8,
    backgroundColor: "#DC143C",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DC143C",
    borderRadius: 4
  },
  signText: {
    color: "white",
    fontSize: width / 30.659
    //  textAlign: "center"
  },
  fbButtonView: {
    width: width / 1.84,
    height: width / 8.8,
    backgroundColor: "#DC143C",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DC143C",
    borderRadius: 4
  },
  fbInnerTopView: {
    flex: 0.82,
    height: width / 8.8,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#DC143C"
  },
  fbText: {
    color: "white",
    fontSize: width / 30.659,
    fontFamily: "Roboto-Regular"
  },
  fbInnerBottomView: {
    flex: 0.18,
    height: width / 8.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC143C"
  },
  forwardIcon: {
    width: width / 17.8,
    height: width / 16.5,
    tintColor: "white"
  },
  googleButtonView: {
    width: width / 1.84,
    height: width / 8.8,
    backgroundColor: "#DC143C",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DC143C",
    borderRadius: 4
  },
  googleLeftView: {
    flex: 0.82,
    height: width / 8.8,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  googleText: {
    color: "white",
    fontSize: width / 27.65,
    fontFamily: "Roboto-Regular"
  },
  googleRightView: {
    flex: 0.18,
    height: width / 8.8,
    justifyContent: "center",
    alignItems: "center"
  },
  emailView: {
    marginTop: width / 7.0159,
    marginBottom: width / 6.468
  },
  emailText: {
    color: "white",
    fontSize: width / 27.4,
    fontFamily: "Roboto-Regular"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export default styles;
