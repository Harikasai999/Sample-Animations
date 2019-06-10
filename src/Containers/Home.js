import React, { Component } from "react";
import { View, Text } from "react-native";
import {
    Container,
    Content,
    Footer
} from "native-base";
import BottomTab from "../Components/BottomTab/BottomTab"
var array = [

    {
        key: "home",
        icon: "home",
        label: "Home",
        image: require("../Images/home.png")
    }, {
        key: "share",
        icon: "share",
        label: "Share",
        image: require("../Images/share.png")
    },
    {
        key: "person",
        icon: "person",
        label: "Person",
        image: require("../Images/user.png")
    },
    {
        key: "notifications",
        icon: "notifications",
        label: "Notifications",
        image: require("../Images/notification.png")
    },
    {
        key: "favorite",
        icon: "favorite",
        label: "Favorite",
        image: require("../Images/heartFill.png")
    },
    {
        key: "settings",
        icon: "settings",
        label: "Settings",
        image: require("../Images/settings.png")
    }
]
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "home"
        };
        this.getTabIndex = this.getTabIndex.bind(this)
    }
    getTabIndex(value) {
        this.setState({
            active: value
        })
    }
    render() {
        const { active } = this.state
        return (
            <Container>
                <View style={{flex:1}}>
                    {active === "home" ?
                        (<View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>{this.state.active}</Text>
                        </View>)
                        : active === "share" ?
                            (<View style={{ flex: 1, backgroundColor: 'brown' }} />)
                            : active === "person" ?
                                (<View style={{ flex: 1, backgroundColor: 'grey' }} />)
                                : active === "notifications" ?
                                    (<View style={{ flex: 1, backgroundColor: 'yellow' }} />)
                                    : active === "favorite" ?
                                        (<View style={{ flex: 1, backgroundColor: 'blue' }} />)
                                        : (<View style={{ flex: 1, backgroundColor: 'green' }} />)}
                </View>
                <Footer>
                    <BottomTab
                        iconDisplay={true}
                        tabsArray={array}
                        mainContainerStyle={{ backgroundColor: "black" }}
                        activeContainerColor={"#FAD002"}
                        inActiveContainerColor={"black"}
                        activeIconColor={"black"}
                        inActiveIconColor={"#FAD002"}
                        activeIconSize={25}
                        inActiveIconSize={20}
                        activeImageSize={20}
                        inActiveImageSize={15}
                        imageDisplay={false}
                        getTabIndex={this.getTabIndex} />
                </Footer>
            </Container>

        );
    }
}
