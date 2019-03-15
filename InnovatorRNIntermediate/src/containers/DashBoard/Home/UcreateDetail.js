import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Transition } from "react-navigation-fluid-transitions";
import { styles } from "./style";
import { Colors } from "../../../utilities/Colors";
import { strings } from "../../../utilities/locales/i18n";

const UcreateDetail = props => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
      <View style={styles.topSecond}>
        <Transition shared="paper">
          <View style={styles.paperSecond} />
        </Transition>
        <Transition shared="image">
          <Image
            style={styles.imageSecond}
            source={require("../../../assets/images/ucreate.jpg")}
          />
        </Transition>
        <Transition appear="horizontal" delay>
          <Text style={styles.startUp}>{strings("dashBoard.startUp")}</Text>
        </Transition>
        <View style={styles.smallImageContainer}>
          <Transition appear="horizontal" delay>
            <View style={styles.smallImageWrapper}>
              <IonIcons
                size={30}
                name={"ios-bulb"}
                color={Colors.PrimaryLightAppColor}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.PrimaryLightAppColor,
                  fontFamily: "Bebas Neue"
                }}
              >
                {strings("dashBoard.spark")}
              </Text>
            </View>
          </Transition>
          <Transition appear="horizontal" delay>
            <View style={styles.smallImageWrapper}>
              <IonIcons
                size={30}
                name={"ios-flash"}
                color={Colors.PrimaryLightAppColor}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.PrimaryLightAppColor,
                  fontFamily: "Bebas Neue"
                }}
              >
                {strings("dashBoard.flash")}
              </Text>
            </View>
          </Transition>
          <Transition appear="horizontal" delay>
            <View style={styles.smallImageWrapper}>
              <IonIcons
                size={30}
                name={"ios-settings"}
                color={Colors.PrimaryLightAppColor}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.PrimaryLightAppColor,
                  fontFamily: "Bebas Neue"
                }}
              >
                {strings("dashBoard.strike")}
              </Text>
            </View>
          </Transition>
          <Transition appear="horizontal" delay>
            <View style={styles.smallImageWrapper}>
              <IonIcons
                size={30}
                name={"md-git-network"}
                color={Colors.PrimaryLightAppColor}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.PrimaryLightAppColor,
                  fontFamily: "Bebas Neue"
                }}
              >
                {strings("dashBoard.bolt")}
              </Text>
            </View>
          </Transition>
        </View>
        <Transition appear="horizontal">
          <View style={styles.headerContainerSecond}>
            <Text style={styles.headerSecond}>
              {strings("dashBoard.ucreateIt")}
            </Text>
            <Text style={styles.subHeaderSecond}>
              {strings("dashBoard.tagLine")}
            </Text>
          </View>
        </Transition>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default UcreateDetail;
