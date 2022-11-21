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
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScaledSheet} from 'react-native-size-matters';
import BackGround from '../../../../assets/background2.jpg';

const Details = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };
  const {height} = useWindowDimensions();
  return (
    <>
      <ImageBackground style={styles.background} source={BackGround}>
        <KeyboardAwareScrollView>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView>
              <View style={styles.containerLabel}>
                <Text style={styles.textLabel}>Địa chỉ nhà</Text>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.container}>
                  <View style={styles.squareText}>
                    <Text style={styles.text1}>Tên tuyến</Text>
                  </View>
                  <View style={styles.squareText2}>
                    <Text style={styles.text2}>ABC</Text>
                  </View>
                </View>

                <View style={styles.container}>
                  <View style={styles.squareText}>
                    <Text style={styles.text1}>Họ tên khách hàng</Text>
                  </View>
                  <View style={styles.squareText2}>
                    <Text style={styles.text2}>Nguyễn Văn A</Text>
                  </View>
                </View>

                <View style={styles.container}>
                  <View style={styles.squareText}>
                    <Text style={styles.text1}>Số điện thoại</Text>
                  </View>
                  <View style={styles.squareText2}>
                    <Text style={styles.text2}>07xxxxxxxx</Text>
                  </View>
                </View>

                <View style={styles.container}>
                  <View style={styles.squareText}>
                    <Text style={styles.text1}>Mã đồng hồ</Text>
                  </View>
                  <View style={styles.squareText2}>
                    <Text style={styles.text2}>xxx</Text>
                  </View>
                </View>

                <View style={styles.container}>
                  <View style={styles.squareText}>
                    <Text style={styles.text1}>Chỉ số cũ</Text>
                  </View>
                  <View style={styles.squareText2}>
                    <Text style={styles.text2}>xxx</Text>
                  </View>
                </View>

                <View style={styles.container}>
                  <View style={styles.squareText}>
                    <Text style={styles.text1}>Chỉ số mới</Text>
                  </View>
                  <View style={styles.squareText2}>
                    <TextInput style={styles.containerSearch}></TextInput>
                  </View>
                </View>
                <View style={styles.containerButton}>
                  <TouchableOpacity style={styles.buttonLuu}>
                    <Text style={styles.textLuu}>Lưu</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </>
  );
};

const styles = ScaledSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },

  safe: {flex: 1, padding: 10},
  containerLabel: {
    flex: 1,
    height: '100@s',
    alignItems: 'center',
  },
  container: {
    height: '70@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderTopWidth: 1,
    //backgroundColor:"red",
  },
  textLabel: {
    fontSize: '25@s',
    fontWeight: 'bold',
    margin: '33@s',
  },
  squareCustomer: {
    height: '60@s',
    margin: '10@s',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F8F8FF',
    borderRadius: '10@s',
  },
  squareText: {
    width: '180@s',
    flexDirection: 'row',
    height: '60@s',
    margin: '6@s',
  },
  squareText2: {
    width: '150@s',
    alignItems: 'flex-end',
    height: '60@s',
    margin: '6@s',
  },
  text1: {fontSize: '17@s', fontWeight: 'bold', margin: '14@s'},
  text2: {fontSize: '17@s', margin: '14@s'},
  containerSearch: {
    backgroundColor: 'white',
    width: '100@s',
    height: '30@s',
    marginTop: '4@s',
    borderRadius: '10@s',
    paddingHorizontal: '10@s',
  },
  keyboard: {
    flex: 1,
    //backgroundColor: "red",
  },
  buttonLuu: {
    width: '150@s',
    padding: '15@s',
    //marginVertical: 15,
    alignItems: 'center',
    borderRadius: '5@s',
    backgroundColor: '#3B71F3',
    margin: '4@s',
  },
  textLuu: {
    fontWeight: 'bold',
    color: 'white',
  },
  containerButton: {
    height: '70@s',
    alignItems: 'flex-end',
    //backgroundColor:"red",
  },
});

export default Details;
