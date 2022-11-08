import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
//import {Avatar} from 'react-native-elements';
import IconUser from '../../../assets/user_no_image.png';
import MainImage from '../../../assets/background2.jpg';
import {ScaledSheet} from 'react-native-size-matters';

const LogOut = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };
  const returnDangNhap = () => {
    navigation.navigate('LogIn');
  };
  const window = useWindowDimensions();
  return (
    <ImageBackground style={styles.background} source={MainImage}>
      <SafeAreaView style={styles.safe}>
        <ScrollView>
          <Image source={IconUser} style={styles.image} />
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Tên tài khoản</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>admin</Text>
            </View>
          </View>
          {/**/}
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Họ và tên</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>Nguyễn Văn A</Text>
            </View>
          </View>
          {/**/}
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>abc@gmail.com</Text>
            </View>
          </View>
          {/**/}
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Ngày sinh</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>1/1/2002</Text>
            </View>
          </View>
          {/**/}
          <Pressable onPress={returnDangNhap} style={styles.press}>
            <Text style={styles.textLogOut}>Log out</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  image: {
    width: '120@s',
    height: '120@s',
    borderRadius: '100@s',
    alignSelf: 'center',
  },
  safe: {flex: 1, padding: 10},
  containerAva: {},
  press: {
    width: '50%',
    padding: '14@s',
    margin: '90@s',
    marginVertical: '15@s',
    alignItems: 'center',
    borderRadius: '5@s',
    backgroundColor: '#3B71F3',
  },
  textLogOut: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '10@s',
  },
  container: {
    height: '40@s',
    //width: '60@s',
    margin: '10@s',

    flexDirection: 'row',
    backgroundColor: '#F8F8FF',
    //alignContent: 'space-around',
    borderRadius: '10@s',
  },
  text: {
    fontSize: '10@s',
  },
  squareText: {
    width: '50@s',
    height: '30@s',
    margin: '5@s',
    padding: '7@s',
    flex: 1,
    //backgroundColor: 'red',
  },
  squareText2: {
    width: '50@s',
    height: '30@s',
    margin: '4@s',
    padding: '7@s',
    alignItems: 'flex-end',
    flex: 1,
    //backgroundColor: 'green',
  },
});

export default LogOut;
