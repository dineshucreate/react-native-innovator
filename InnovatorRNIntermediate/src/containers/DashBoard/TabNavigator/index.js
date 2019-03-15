import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../Home";
import Profile from "../Profile";
import Messaging from "../Messaging";
import { Colors } from "../../../utilities/Colors";
const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Messaging,
    Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Home":
            iconName = "ios-home";
            break;
          case "Messaging":
            iconName = "ios-chatboxes";
            break;
          case "Profile":
            iconName = "ios-contact";
            break;
          default:
            break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.PrimaryAppColor,
      inactiveTintColor: "grey"
    }
  }
);
export default createAppContainer(TabNavigator);
