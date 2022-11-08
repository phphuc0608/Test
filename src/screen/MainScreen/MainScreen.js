import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Pressable,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import IconXacNhanThanhToan from '../../../assets/XacNhanThanhToanIcon.png';
import IconGhiSoNuoc from '../../../assets/GhiSoNuoc.png';
import MainImage from '../../../assets/background2.jpg';
import IconUser from '../../../assets/user_no_image.png';
import styles from './style';

const MainScreen = ({navigation}) => {
  const callLogOut = () => {
    navigation.push('LogOut');
  };
  const callGhiSoNuoc = () => {
    navigation.push('GhiSoNuoc');
  };

  const {height} = useWindowDimensions();
  return (
    <ImageBackground style={styles.background} source={MainImage}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'flex-end'}}>
            <Pressable onPress={callLogOut} style={styles.squareIconUser}>
              <Image style={styles.iconuser} source={IconUser} />
            </Pressable>
          </View>
          <View style={styles.container2}>
            <View style={styles.square} backgroundColor={'#0000FF'}>
              <Text style={styles.text}>Số khách hàng quản lý</Text>
              <Text style={styles.number}>88</Text>
            </View>
            <View style={styles.square} backgroundColor={'#A020F0'}>
              <Text style={styles.text}>Số tuyến quản lý</Text>
              <Text style={styles.number}>88</Text>
            </View>
            <View style={styles.square} backgroundColor={'#FA4616'}>
              <Text style={styles.text}>Số khách hàng chưa thanh toán</Text>
              <Text style={styles.number}>88</Text>
            </View>
          </View>
          <View style={styles.squareLabel}>
            <Text style={styles.label}>Chức năng</Text>
          </View>
          <View style={styles.squareButton}>
            <Pressable
              onPress={callGhiSoNuoc}
              style={styles.button}
              backgroundColor={'#FA4616'}>
              <View style={styles.squareIcon}>
                <Image
                  style={styles.iconGhiSoNuoc}
                  source={IconGhiSoNuoc}></Image>
              </View>
              <Text style={styles.textButton}>Ghi số nước</Text>
            </Pressable>
            <Pressable style={styles.button} backgroundColor={'#A020F0'}>
              <View style={styles.squareIcon}>
                <Image
                  style={styles.iconXacNhanThanhToan}
                  source={IconXacNhanThanhToan}></Image>
              </View>
              <Text style={styles.textButton}>Xác nhận thanh toán</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MainScreen;
