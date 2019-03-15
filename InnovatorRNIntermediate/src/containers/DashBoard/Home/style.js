import { StyleSheet, Platform } from "react-native";
import { Colors } from "../../../utilities/Colors";
import { width, height } from "../../../utilities/scale";
export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topFirst: {
    backgroundColor: Colors.SecondaryAppColor,
    flex: 1
  },
  paperOne: {
    backgroundColor: Colors.PrimaryLightAppColor,
    width: width * 0.65,
    height: height * 0.45,
    position: "absolute",
    left: 10,
    top: height * 0.5 - 150,
    transform: [{ rotate: "-20deg" }],
    alignItems: "flex-start",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  imageFirst: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    left: width - 200,
    top: height * 0.5 - 160,
    transform: [{ rotate: Platform.OS === "ios" ? "35deg" : "0deg" }]
  },
  headerContainerFirst: {
    padding: 20,
    paddingTop: height * 0.1
  },
  headerFirst: {
    color: "white",
    fontSize: 60,
    marginBottom: -14,
    fontFamily: "Bebas Neue"
  },
  subHeaderFirst: {
    color: "white",
    fontSize: 24,
    fontFamily: "Bebas Neue"
  },
  topSecond: {
    backgroundColor: Colors.SecondaryAppColor,
    flex: 1
  },
  imageSecond: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    left: width * 0.5 - 200 / 2,
    top: Platform.OS === "ios" ? 60 : 30
  },
  paperSecond: {
    backgroundColor: Colors.PrimaryLightAppColor,
    position: "absolute",
    left: 0,
    top: height * 0.5,
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    padding: 10
  },
  startUp: {
    color: "#FFF",
    fontSize: 34,
    fontFamily: "Bebas Neue",
    textAlign: "center",
    paddingTop: Platform.OS === "ios" ? -55 + height * 0.5 : -85 + height * 0.5
  },
  headerContainerSecond: {
    padding: 20,
    justifyContent: "center",
    paddingTop: 50
  },
  headerSecond: {
    color: Colors.white,
    fontSize: 42,
    textAlign: "center",
    fontFamily: "Bebas Neue",
    marginBottom: -6
  },
  subHeaderSecond: {
    color: Colors.white,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Bebas Neue"
  },
  smallImageContainer: {
    position: "absolute",
    left: 0,
    top: height * 0.54,
    bottom: 0,
    right: 0,
    alignItems: "center",
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 10,
    marginRight: 10,
    margin: 30
  },
  smallImageWrapper: {
    width: width / 5,
    height: width / 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
