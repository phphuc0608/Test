import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  //type = "PRIMARY" khi thay type = undefined thi n se tra ve PRIMARY
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={(styles.text, styles[`text_${type}`])}>{text}</Text>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '50%',
    padding: '15@s',
    marginVertical: '15@s',
    alignItems: 'center',
    borderRadius: '5@s',
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: 'white',
  },
});

export default CustomButton;
