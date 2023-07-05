import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, theme} from '../utils';

const Label = props => {
  const {title, style} = props;
  return (
    <View>
      <Text style={[styles.customLabel, style]}>{title}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  customLabel: {
    fontSize: scale(18),
    color: theme.colors.white,
    paddingVertical: Platform.OS === 'ios' ? scale(4) : scale(2),
    fontFamily: theme.fonts.AngelsCookie,
  },
});
