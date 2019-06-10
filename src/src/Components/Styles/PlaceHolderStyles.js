import {StyleSheet, Platform, Dimensions} from 'react-native';
const{width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
    imageView:{
        width:width/8.89,
        height: width/8.89,
        borderRadius: width/7.5,
        backgroundColor: "lightgrey"
    }
  });
  export default styles;