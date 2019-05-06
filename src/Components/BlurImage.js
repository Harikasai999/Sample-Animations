import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";

type Props = {};
const array = [
  {
    photographer: "John Micheal",
    photo: {
      uri:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    key: "1"
  },
  {
    photographer: "John Micheal",
    photo: {
      uri:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    key: "2"
  },
  {
    photographer: "John Micheal",
    photo: {
      uri:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    key: "3"
  },
  {
    photographer: "John Micheal",
    photo: {
      uri:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    key: "4"
  }
];
export default class BlurImage extends Component<Props> {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {array.map((res, key) => {
            console.log("keykeykeykeykey", key);
            return (
              <View style={{ alignItems: "center" }} key={key}>
                <Image
                  style={styles.image}
                  source={{ uri: res.photo.uri }}
                  resizeMode="cover"
                  blurRadius={key === 0 ? 1 : key === 1 ? 3 : key === 2 ? 5 : 7}
                />
                <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "600" }}>
                  Image-Blur Radius:
                  {key === 0 ? 1 : key === 1 ? 3 : key === 2 ? 5 : 7}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "white"
  },
  image: {
    marginTop: 10,
    height: 280,
    width: "92%",
    alignSelf: "center"
  }
});
