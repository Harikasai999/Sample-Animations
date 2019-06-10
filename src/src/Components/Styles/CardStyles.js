import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  mainView: {
    //flex: 1
    // marginTop: -width / 82.8
    // marginHorizontal: width / 208
  },
  cardView: {
    width: width / 3.6315,
    height: width / 4.14,
    justifyContent: "center",
    alignItems: "center",
    //position: "relative",
    backgroundColor: "#1D1D1D",
    borderWidth: 2,
    borderColor: "#DC143C",
    borderRadius: 5
  },
  cardsView: {
    width: width / 3.6315,
    height: width / 4.14,
    justifyContent: "center",
    alignItems: "center",
    //position: "relative",
    backgroundColor: "lightgreen",
    borderWidth: 2,
    borderColor: "#DC143C",
    borderRadius: 5
  },

  card: {
    backgroundColor: "#1D1D1D",
    borderWidth: 1,
    borderColor: "#DC143C",
    borderRadius: 5
  },
  imageView: {
    width: width / 8.625,
    height: width / 8.625,
    borderRadius: width / 8.28,
    backgroundColor: "#9B9B9B"
    //marginTop:-1
  },
  textView: {
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    // fontFamily: "Roboto-Regular",
    //backgroundColor:"white",
    //fontSize: 0.78125,
    fontSize: width / 31.84,
    paddingTop: 5
  },
  iconView: {
    backgroundColor: "#1D1D1D",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 6,
    right: 6,
    borderRadius: width / 8.28
  }
});
export default styles;
