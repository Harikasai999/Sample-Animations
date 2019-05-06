import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Ripple from "react-native-material-ripple";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";

const colors = {
  transparent: "transparent",
  white: "#fff",
  heartColor: "#e92f3c",
  textPrimary: "#515151",
  black: "#000",
  red: "red"
};

const card = {
  photographer: "John Micheal",
  photo: {
    uri:
      "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  key: "pkarniej"
};

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);
type Props = {};
export default class ButtonAnimation extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    };

    this.lastPress = 0;
  }

  handleLargeAnimatedIconRef = ref => {
    this.largeAnimatedIcon = ref;
  };

  handleSmallAnimatedIconRef = ref => {
    this.smallAnimatedIcon = ref;
  };

  animateIcon = () => {
    const { liked } = this.state;
    this.largeAnimatedIcon.stopAnimation();

    if (liked) {
      this.largeAnimatedIcon
        .bounceIn()
        .then(() => this.largeAnimatedIcon.bounceOut());
      this.smallAnimatedIcon.pulse(200);
    } else {
      this.largeAnimatedIcon
        .bounceIn()
        .then(() => {
          this.largeAnimatedIcon.bounceOut();
          this.smallAnimatedIcon.bounceIn();
        })
        .then(() => {
          if (!liked) {
            this.setState(prevState => ({ liked: !prevState.liked }));
          }
        });
    }
  };

  handleOnPress = () => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const doublePressDelay = 400;

    if (delta < doublePressDelay) {
      this.animateIcon();
    }
    this.lastPress = time;
  };

  handleOnPressLike = () => {
    this.smallAnimatedIcon.bounceIn();
    this.setState(prevState => ({ liked: !prevState.liked }));
  };
  onClicking() {
    // alert("jkdhfjh");
  }
  render() {
    const { liked } = this.state;
    return (
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.2}
            style={styles.card}
            onPress={this.handleOnPress}
          >
            <AnimatedIcon
              ref={this.handleLargeAnimatedIconRef}
              name="heart"
              color={colors.red}
              size={100}
              style={styles.animatedIcon}
              duration={500}
              delay={200}
            />
            <Image
              style={styles.image}
              source={card.photo}
              resizeMode="cover"
            />
            <View style={styles.photoDescriptionContainer}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={this.handleOnPressLike}
              >
                <AnimatedIcon
                  ref={this.handleSmallAnimatedIconRef}
                  name={liked ? "heart" : "hearto"}
                  color={liked ? colors.heartColor : colors.textPrimary}
                  size={18}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Photo by: {card.photographer}</Text>

                <Text style={styles.textPhotographer}>
                  Please double tap on image
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/*  <View style={{ alignItems: "center", marginTop: 20 }}>
            <Ripple
              rippleSize={50}
              onPress={this.onClicking.bind(this)}
              // style={{ height: 50, width: 50 }}
            >
              <Image
                source={require("../Images/like.png")}
                style={{ height: 50, width: 50 }}
              />
            </Ripple>
          </View>*/}
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Ripple
              onPress={this.onClicking.bind(this)}
              rippleColor={"white"}
              rippleOpacity={1}
            >
              <View style={styles.button}>
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                >
                  Button Animation
                </Text>
              </View>
            </Ripple>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
    // flex: 1
    // backgroundColor: "darkkhaki"
    // alignItems: "center",
    // justifyContent: "center"
  },

  button: {
    height: 40,
    width: 170,
    backgroundColor: "black",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  card: {
    height: 345,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2
  },
  image: {
    marginTop: 10,
    height: 280,
    width: "92%"
  },
  photoDescriptionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10
  },
  icon: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  animatedIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    borderRadius: 160,
    opacity: 0
  },
  text: {
    // textAlign: "center",
    marginLeft: 10,
    fontSize: 13,
    backgroundColor: colors.transparent,
    color: colors.textPrimary
  },
  textPhotographer: {
    marginLeft: 10,
    fontWeight: "bold"
    // textAlign: "center"
  },
  textContainer: {
    // flexDirection: "row",
    textAlign: "left",
    paddingTop: 0
  }
});
