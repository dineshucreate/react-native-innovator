import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import ImagePicker from "react-native-image-picker";
import IonIcons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import style from "./style";
import { strings } from "../../../utilities/locales/i18n";

const data = [
  {
    title: "SPARK",
    icon: "ios-bulb"
  },
  {
    title: "FLASH",
    icon: "ios-flash"
  },
  {
    title: "STRIKE",
    icon: "ios-settings"
  },
  {
    title: "BOLT",
    icon: "md-git-network"
  }
];
export default class Profile extends React.PureComponent {
  state = {
    avatarSource: null
  };

  selectPhoto = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        this.setState({
          avatarSource: { uri: response.uri }
        });
      }
    });
  };
  renderItem = ({ item }) => {
    return (
      <View style={style.itemContainer}>
        <View style={style.itemSubContainer}>
          <IonIcons size={50} name={item.icon} color={"white"} />
          <Text style={style.itemText}>{item.title}</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={style.container}>
        <ImageBackground
          source={require("../../../assets/images/ucreateBg.png")}
          style={style.imageBg}
        >
          <View style={style.userProfileContainer}>
            <View style={style.imageContainer}>
              <Image
                source={
                  this.state.avatarSource === null
                    ? require("../../../assets/images/ucreate.jpg")
                    : this.state.avatarSource
                }
                style={style.userImage}
              />
              <TouchableOpacity
                style={style.imagePickerButton}
                onPress={this.selectPhoto}
              >
                <AntDesign name={"pluscircle"} color={"white"} size={40} />
              </TouchableOpacity>
            </View>
            <Text style={style.userNameText}>
              {strings("profile.ucreateIt")}
            </Text>
          </View>
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={this.renderItem}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </ImageBackground>
      </View>
    );
  }
}
