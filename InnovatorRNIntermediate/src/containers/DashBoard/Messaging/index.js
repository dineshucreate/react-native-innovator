import React from "react";
import { InteractionManager, View } from "react-native";
import { SharedElementRenderer } from "react-native-motion";
import ListView from "./ListView";
import Detail from "../Detail/Detail";
import ToolbarBackground from "../Detail/ToolbarBackground";
import { styles } from "./style";

export default class Messaging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      phase: "phase-0"
    };
  }
  onItemPressed = item => {
    this.setState({
      phase: "phase-1",
      selectedItem: item
    });
  };
  onBackPressed = () => {
    this.setState({
      phase: "phase-3"
    });
  };
  onSharedElementMovedToDestination = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        phase: "phase-2"
      });
    });
  };
  onSharedElementMovedToSource = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        selectedItem: null,
        phase: "phase-0"
      });
    });
  };
  renderPage() {
    const { selectedItem, phase } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.pageContainer}>
        <ListView
          selectedItem={selectedItem}
          onItemPress={this.onItemPressed}
          navigation={navigation}
          phase={phase}
        />
        <Detail
          phase={phase}
          selectedItem={selectedItem}
          onBackPress={this.onBackPressed}
          onSharedElementMovedToDestination={
            this.onSharedElementMovedToDestination
          }
          onSharedElementMovedToSource={this.onSharedElementMovedToSource}
        />
      </View>
    );
  }
  render() {
    const { phase } = this.state;
    return (
      <SharedElementRenderer>
        <View style={styles.container}>
          <ToolbarBackground
            isHidden={phase !== "phase-1" && phase !== "phase-2"}
          />
          {this.renderPage()}
        </View>
      </SharedElementRenderer>
    );
  }
}
