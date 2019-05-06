import React, { Component } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native";
var { height, width } = Dimensions.get("window");
import ImagesDetails from "./ImagesDetails";
const array = [
  {
    id: "1",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  },
  {
    id: "2",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydKa7Dh07PVap8ydkjYGRRYl1jI_YmxX2bGdB1WD1gb7XICH8wQ"
    }
  },
  {
    id: "3",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcrnWgito6J4J-EmACyiRlPoCW73FZLvwI7bUJk2jWdmMC1z2JQ"
    }
  },
  {
    id: "4",
    photographer: "John Micheal",
    photo: {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCbrBNzNVYRK0bLGA9nl89w25d9GOiD0gQc4vIbh0ecMQKte8"
    }
  }
];
type Props = {};
export default class ImageAnimation extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedItem: null
    };
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }
  _keyExtractor = (item, index) => item.id;
  onModalOpen(item) {
    console.log("jhqwqwqwdkjahdjh", item);
    this.setState(
      {
        selectedItem: item
      },
      () => {
        this.setState({
          modalVisible: true
        });
      }
    );
  }
  onModalClose() {
    this.setState({
      modalVisible: false
    });
  }
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onModalOpen(item)}>
        <View style={{ margin: 10 }}>
          <Image style={styles.image} source={{ uri: item.photo.uri }} />
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ alignSelf: "center" }}
          numColumns={2}
          data={array}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          transparent={true}
        >
          <ImagesDetails
            onClose={this.onModalClose}
            selectedItem={this.state.selectedItem}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // backgroundColor: "burlywood"
  },
  image: {
    marginTop: 10,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: width / 5
    // borderRadius: "25%"
  }
});
