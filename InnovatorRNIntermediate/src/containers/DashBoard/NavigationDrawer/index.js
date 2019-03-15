import React from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import firebase from "react-native-firebase";
import Tabs from "../TabNavigator";
import Settings from "../Settings";
import DrawerContent from "./DrawerContent";
import MenuIcon from "./MenuIcon";
import { Colors } from "../../../utilities/Colors";
import NotificationIcon from "./NotificationIcon";
const notification = new firebase.notifications.Notification()
  .setNotificationId("notificationId")
  .setTitle("Hello innovator")
  .setBody("Welcome to innovator app.");

const DrawerStack = createDrawerNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        drawerLabel: "DashBoard",
        drawerIcon: ({ tintColor }) => (
          <AntDesignIcon name={"home"} color={tintColor} size={25} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        drawerLabel: "Settings",
        drawerIcon: ({ tintColor }) => (
          <AntDesignIcon name={"setting"} color={tintColor} size={25} />
        )
      }
    }
  },
  {
    intialRouteName: "Home",
    contentComponent: DrawerContent,
    drawerBackgroundColor: "transparent",
    drawerType: "slide"
  }
);
const MainStack = createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: Colors.PrimaryAppColor
        },
        title: "Innovator", // Title to appear in status bar
        headerLeft: <MenuIcon navigation={navigation} />,
        headerRight: <NotificationIcon onClick={sendPushNotification} />,
        headerTitleStyle: {
          color: Colors.white
        }
      })
    }
  },
  { headerMode: "float" }
);
const sendPushNotification = () => {
  notification.android
    .setChannelId("channelId")
    .android.setSmallIcon("ic_launcher");
  firebase.notifications().displayNotification(notification);
};
export default createAppContainer(MainStack);
