import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Avatar from "./Avatar";
import Row from "../Row";
import assets from "../../../../assets/images";
import { Colors } from "../../../../utilities/Colors";
import { styles } from "./style";

export default class Header extends PureComponent {
  render() {
    const { name, isApproved } = this.props;
    let icon = null;
    if (isApproved) {
      icon = (
        <Ionicons name="md-checkbox" size={24} color={Colors.PrimaryAppColor} />
      );
    } else {
      icon = <MaterialIcons name="warning" size={24} color={"red"} />;
    }

    return (
      <Row style={styles.headerContainer}>
        <Avatar text={name.substring(0, 1)} src={assets[name]} />
        <View style={styles.nameContainer}>
          <Text>{name}</Text>
        </View>
        <View style={styles.rightContainer}>{icon}</View>
      </Row>
    );
  }
}
