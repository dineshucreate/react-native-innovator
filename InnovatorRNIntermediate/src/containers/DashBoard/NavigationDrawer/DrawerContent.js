import React from "react";
import { Image, View } from "react-native";
import { DrawerItems } from "react-navigation";
import { styles } from "./style";
const DrawerContent = props => (
  <View>
    <View style={styles.contentContainer}>
      <Image
        source={require("../../../assets/images/ucreate.jpg")}
        style={styles.headerImage}
      />
    </View>
    <DrawerItems {...props} />
  </View>
);
export default DrawerContent;
