import React, {useContext, useState, Component, useEffect} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';
import Logo from '../../../assets/Water_company_logo-removebg-preview.png';
import SignInImage from '../../../assets/background2.jpg';
import CustomButton from '../Login/CustomButton';
import {showNotify} from '.././../ultils/myFuntions';
//import axios from 'axios';
import {GlobalContext} from '../../context/Provider';
import loginUser from '../../context/actions/loginUser';

const LogInScreen = ({navigation, route}) => {
  const {
    authDispatch,
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordVisible, setpasswordVisible] = useState(true);

  //const {height} = useWindowDimensions();

  const checkTextInput = () => {
    if (!username.trim()) {
      showNotify('Tên đăng nhập không được để trống');
      return;
    } else if (username != 'xxxx') {
      showNotify('Tên đăng nhập không tồn tại hoặc bị nhập sai');
      return;
    } else if (!userPassword.trim()) {
      showNotify('Mật khẩu không được để trống');
      return;
    } else if (userPassword != 'yyyy') {
      showNotify('Mật khẩu không tồn tại hoặc bị nhập sai');
      return;
    } else {
      //callAPI();
      callMainScreen();
    }
  };

  const callMainScreen = () => {
    navigation.reset({index: 0, routes: [{name: 'MainScreen'}]});
  };

  // const callAPI = async () => {
  //   axios
  //     .post(
  //       "https://quytrinh.mobifone5.vn:5222/owf/login",
  //       {
  //         username: "xxxx",
  //         password: "yyyy",
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //};

  return (
    //Khi nhấn vào màn hình thì bàn phím sẽ hạ xuống
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={SignInImage}
          style={styles.background}
          resizeMode="cover">
          <Image source={Logo} style={styles.logo} />

          <View style={styles.container}>
            <TextInput
              placeholder="Tên đăng nhập"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>

          <View style={styles.container}>
            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry={passwordVisible}
              value={userPassword}
              onChangeText={setUserPassword}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touchableButton}
              onPress={() => setpasswordVisible(!passwordVisible)}>
              <Image
                source={
                  passwordVisible
                    ? require('../../../assets/hide.png')
                    : require('../../../assets/show.png')
                }
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>

          <CustomButton text="Đăng nhập" onPress={checkTextInput} />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',

    borderColor: 'white',
    borderWidth: '1@s',
    borderRadius: '5@s',

    paddingHorizontal: '10@s',
    marginVertical: '5@s',
  },

  input: {
    width: '50%',
    padding: '10@s',
  },

  logo: {
    width: '80%',
    height: '30%',
    margin: '20@s',
    resizeMode: 'contain', //resize logo
  },

  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: '1@s',
  },

  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },

  touchableButton: {
    position: 'absolute',
    right: '3@s',
    height: '40@s',
    width: '35@s',
    padding: '2@s',
  },

  error: {
    backgroundColor: 'white',
    width: '80%',

    borderColor: 'red',
    borderWidth: '1@s',
    borderRadius: '5@s',

    paddingHorizontal: '10@s',
    marginVertical: '5@s',
  },
});

export default LogInScreen;
