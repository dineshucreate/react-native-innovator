import { StyleSheet } from "react-native";
import GetPlatFormElevation from "../../../../utilities/GetPlatFormElevation";

export const styles = StyleSheet.create({
  listViewContainer: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    ...GetPlatFormElevation(2)
  },
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  contentContainer: {
    height: 56,
    alignItems: "center"
  },
  cellContainer: {
    flex: 1
  },
  titleText: {
    fontSize: 10,
    color: "gray"
  },
  amountText: {
    fontSize: 18,
    fontWeight: "900"
  },
  headerContainer: {
    height: 56,
    alignItems: "center"
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16
  },
  rightContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center"
  }
});
