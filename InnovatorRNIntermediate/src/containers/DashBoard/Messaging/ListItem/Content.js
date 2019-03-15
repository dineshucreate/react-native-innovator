import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { strings } from "../../../../utilities/locales/i18n";
import Row from "../Row";
import { styles } from "./style";

export default class Content extends PureComponent {
  render() {
    const { rating, date, isApproved } = this.props;

    return (
      <Row style={styles.contentContainer}>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>{strings("messaging.rating")}</Text>
          <Text style={styles.amountText}>{rating}</Text>
        </View>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>{strings("messaging.dob")}</Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>{strings("messaging.status")}</Text>
          <Text>
            {isApproved
              ? strings("messaging.approved")
              : strings("messaging.notApproved")}
          </Text>
        </View>
      </Row>
    );
  }
}
