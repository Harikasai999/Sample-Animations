import React, { Component } from "react";
import { View ,Text} from "react-native";

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }


  render() {
    return (
      <View style={{ width: "100%",aspectRatio:2/1,backgroundColor:"grey",flexDirection:"row"}}>
       <View style={{flex:11,height:"100%",backgroundColor:"blue"}}></View>
       <View style={{flex:17,height:"100%",backgroundColor:"green"}}></View>
     </View>
    );
  }
}
{/* <View style={{ width: "100%",aspectRatio:0.6}}>
<ImageBackground
source={require("../Images/new.png")}
style={{ width: "100%",height:"100%" }} 
>
 <View style={{width:"100%",aspectRatio:8,justifyContent:"center" ,backgroundColor:"#1D1D1D",opacity:0.4}}>
    <TextComp
          textStyles={styles.textView}
          text="follow your friends"
        />
   </View>
   <View style={{width:"100%",aspectRatio:2.9,justifyContent:"center" ,backgroundColor:"#1D1D1D",opacity:0.4}}>
   <FlatList
          style={{marginLeft:width/19.7}}
          horizontal={true}
          data={this.state.data}
          extraData={this.state}
          renderItem={this._renderItem}
        />
   </View>
  </ImageBackground>
  </View> */}