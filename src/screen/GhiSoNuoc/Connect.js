import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import TabNavigators from '../GhiSoNuoc/Elements/TabNavigator';
import styles from './styles';
const Connect = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput placeholder="Tìm kiếm" style={styles.input} />
      </View>
      <TabNavigators stackNavigation={navigation} />
    </>
  );
};
export default Connect;
