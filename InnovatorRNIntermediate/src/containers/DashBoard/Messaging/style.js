import { StyleSheet } from "react-native";
import { Colors } from "../../../utilities/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowConatiner: {
    flexDirection: "row"
  },
  listContainer: {
    ...StyleSheet.absoluteFillObject
  },
  pageContainer: { flex: 1, backgroundColor: Colors.PrimaryLightAppColor }
});
