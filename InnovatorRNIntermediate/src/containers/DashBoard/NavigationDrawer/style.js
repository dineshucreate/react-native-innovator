import { StyleSheet } from "react-native";
import { Colors } from "../../../utilities/Colors";

export const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.SecondaryAppColor,
    height: 140,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPadding: { paddingLeft: 15 },
  paddingRight: { paddingRight: 15 },
  menuIcon: { height: 30, width: 30 },
  headerImage: { height: 100, width: 100, borderRadius: 50 }
});
