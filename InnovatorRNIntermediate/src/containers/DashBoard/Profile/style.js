import { StyleSheet } from "react-native";
import { Colors } from "../../../utilities/Colors";
import { height, width } from "../../../utilities/scale";

export default (style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: 15
  },
  itemContainer: {
    height: height * 0.17,
    width: width * 0.45,
    padding: 2
  },
  imagePickerButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.PrimaryAppColor,
    justifyContent: "center",
    position: "absolute",
    top: 20,
    left: 120,
    alignItems: "center"
  },
  userProfileContainer: {
    height: height * 0.3,
    width: width,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBg: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    fontSize: 28,
    color: "white",
    fontFamily: "Bebas Neue"
  },
  itemSubContainer: {
    flex: 1,
    backgroundColor: Colors.PrimaryLightAppColor,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center"
  },
  userNameText: {
    color: Colors.PrimaryAppColor,
    fontSize: 24,
    paddingTop: 10,
    fontWeight: "bold"
  },
  imageContainer: {
    height: 152,
    width: 152
  },
  userImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: Colors.PrimaryAppColor
  },
  textStyle: {
    fontSize: 25,
    padding: 20,
    textAlign: "center"
  }
}));
