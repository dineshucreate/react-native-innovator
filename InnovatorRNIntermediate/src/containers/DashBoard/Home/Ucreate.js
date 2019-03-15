import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { strings } from "../../../utilities/locales/i18n";
import { styles } from "./style";

const Ucreate = props => (
  <View style={styles.container}>
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate("UcreateDetail")}
    >
      <View style={styles.topFirst}>
        <Transition appear="right" shared="paper">
          <View style={styles.paperOne} />
        </Transition>
        <Transition appear="left" shared="image">
          <Image
            style={styles.imageFirst}
            source={require("../../../assets/images/ucreate.jpg")}
          />
        </Transition>
        <Transition appear="horizontal">
          <View style={styles.headerContainerFirst}>
            <Text style={styles.headerFirst}>
              {strings("dashBoard.ucreateIt")}
            </Text>
            <Text style={styles.subHeaderFirst}>
              {strings("dashBoard.tagLine")}
            </Text>
          </View>
        </Transition>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default Ucreate;
