import React,{Component} from "react";
import {View,Text,Dimensions} from "react-native"
const{width,height}=Dimensions.get("window")
export default class SampleBtn extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{width:width/1.666,height:width/8.32,backgroundColor:"#DC143C",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontSize:width/27.65,fontFamily:"Roboto-Regular"}}>signin</Text>
            </View>
            </View>
        )
    }
}
// width: this.props.width,
//                        height: height * (this.props.width / width),

// width: width * (this.props.height / height),
//                        height: this.props.height
//width:width/1.666