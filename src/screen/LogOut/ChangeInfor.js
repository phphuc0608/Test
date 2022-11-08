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
import BackGround from '../../../assets/background2.jpg';

const ChangeInfor = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };
  const {height} = useWindowDimensions();
  return (
    <>
      {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboard}> */}

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
      {/* </KeyboardAvoidingView> */}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },

  safe: {flex: 1, padding: 10},
  containerLabel: {
    flex: 1,
    height: 100,
    alignItems: 'center',
  },
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderTopWidth: 1,
    //backgroundColor:"red",
  },
  textLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 33,
  },
  squareCustomer: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
  },
  squareText: {
    width: 180,
    flexDirection: 'flex-start',
    height: 60,
    margin: 6,
  },
  squareText2: {
    width: 150,
    alignItems: 'flex-end',
    height: 60,
    margin: 6,
  },
  text1: {fontSize: 17, fontWeight: 'bold', margin: 14},
  text2: {fontSize: 17, margin: 14},
  containerSearch: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    marginTop: 4,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  keyboard: {
    flex: 1,
    //backgroundColor: "red",
  },
  buttonLuu: {
    width: 150,
    padding: 15,
    //marginVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#3B71F3',
    margin: 4,
  },
  textLuu: {
    fontWeight: 'bold',
    color: 'white',
  },
  containerButton: {
    height: 70,
    alignItems: 'flex-end',
    //backgroundColor:"red",
  },
});

export default ChangeInfor;
