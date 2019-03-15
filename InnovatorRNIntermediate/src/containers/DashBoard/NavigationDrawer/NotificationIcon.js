import React from "react";
import { TouchableOpacity, Image } from "react-native";
import AntIcons from "react-native-vector-icons/AntDesign";
import { Colors } from "../../../utilities/Colors";
import { styles } from "./style";

export default (NotificationIcon = props => {
  const { onClick } = props;
  return (
    <TouchableOpacity style={styles.paddingRight} onPress={onClick}>
      <AntIcons name={"notification"} size={30} color={Colors.white} />
    </TouchableOpacity>
  );
});
