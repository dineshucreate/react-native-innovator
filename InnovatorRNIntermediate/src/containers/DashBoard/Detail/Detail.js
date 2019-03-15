import React, { PureComponent } from "react";
import { Easing, Text, View, FlatList, StyleSheet } from "react-native";
import { SharedElement, TranslateYAndOpacity } from "react-native-motion";
import Row from "../Messaging/Row";
import ListItem from "../Messaging/ListItem";
import BottomBar from "./BottomBar";

class Detail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opacityOfDestinationItem: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.phase === "phase-2" && nextProps.phase === "phase-3") {
      this.sharedElementRef.moveToSource();
    }
  }
  onMoveToDestinationDidFinish = () => {
    this.setState({ opacityOfDestinationItem: 1 });
    this.props.onSharedElementMovedToDestination();
  };
  onMoveToSourceWillStart = () => {
    this.setState({ opacityOfDestinationItem: 0 });
  };
  renderItem = ({ item, index }) => {
    const { phase, selectedItem } = this.props;

    let delay = index;
    // we need it to go from the end
    if (phase === "phase-3") {
      delay = selectedItem.items.length - index;
    }

    return (
      <TranslateYAndOpacity isHidden={phase !== "phase-2"} delay={56 * delay}>
        <View style={styles.itemContainer}>
          <Row style={styles.rowContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{item.name}</Text>
            </View>
            <Text style={styles.amountText}>{item.amount}</Text>
          </Row>
          <Text style={styles.vatText}>
            {`${item.amount} X1 (Including VAT 10%)`}
          </Text>
        </View>
      </TranslateYAndOpacity>
    );
  };
  render() {
    const {
      selectedItem,
      phase,
      onBackPress,
      onSharedElementMovedToSource
    } = this.props;
    const { opacityOfDestinationItem } = this.state;

    const { items = [] } = selectedItem || {};

    if (!selectedItem) {
      return null;
    }

    return (
      <View style={styles.container}>
        <SharedElement
          ref={node => (this.sharedElementRef = node)}
          sourceId={selectedItem.name}
          easing={Easing.in(Easing.back())}
          onMoveToDestinationDidFinish={this.onMoveToDestinationDidFinish}
          onMoveToSourceWillStart={this.onMoveToSourceWillStart}
          onMoveToSourceDidFinish={onSharedElementMovedToSource}
        >
          <View
            style={{
              opacity: opacityOfDestinationItem,
              backgroundColor: "transparent"
            }}
          >
            <ListItem
              item={selectedItem}
              onPress={() => {}}
              animateOnDidMount={false}
              isHidden={false}
            />
          </View>
        </SharedElement>
        <FlatList
          data={items}
          dataExtra={phase}
          keyExtractor={item => item.amount}
          renderItem={this.renderItem}
        />
        <BottomBar isHidden={phase === "phase-3"} onBackPress={onBackPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingTop: 10,
    flex: 1
  },
  titleContainer: {
    flex: 1
  },
  itemContainer: {
    marginHorizontal: 16,
    marginVertical: 8
  },
  rowContainer: {
    alignItems: "center"
  },
  titleText: { color: "white" },
  amountText: {
    fontSize: 18,
    color: "white",
    fontWeight: "900"
  },
  vatText: {
    fontSize: 10,
    color: "white"
  }
});

export default Detail;
