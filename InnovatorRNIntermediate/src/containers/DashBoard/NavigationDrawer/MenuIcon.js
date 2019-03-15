import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { DrawerActions } from "react-navigation";
import { styles } from "./style";

export default (MenuIcon = props => {
  const { navigation } = props;
  return (
    <TouchableOpacity
      style={styles.buttonPadding}
      onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer());
      }}
    >
      <Image
        source={require("../../../assets/images/menu.png")}
        style={styles.menuIcon}
      />
    </TouchableOpacity>
  );
});
