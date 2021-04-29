import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {Colors} from '../../utilities/Colors';
import styles from './style';

const Loader = ({
  loading,
  absolute,
  backgroundColor,
  containerStyle,
  loaderColor,
  loaderSize = 'large',
  whiteSubContainerStyle,
}) => {
  if (!loading) {
    return null;
  }

  if (absolute) {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          styles.flexCenterStyle,
          {backgroundColor: Colors.black2},
          containerStyle,
        ]}>
        <View
          style={[styles.absoluteLoaderSubContainer, whiteSubContainerStyle]}>
          <ActivityIndicator
            color={loaderColor || Colors.black1}
            size={loaderSize}
          />
        </View>
      </View>
    );
  }

  const parentContainerStyle = [
    styles.flexCenterStyle,
    {
      backgroundColor: backgroundColor || Colors.transparent,
      flex: 1,
    },
    containerStyle,
  ];

  return (
    <View style={parentContainerStyle}>
      <ActivityIndicator
        color={loaderColor || Colors.black1}
        size={loaderSize}
      />
    </View>
  );
};

export default Loader;
