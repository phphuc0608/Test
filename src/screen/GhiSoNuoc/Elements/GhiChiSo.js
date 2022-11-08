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
  TouchableOpacity,
} from 'react-native';
import HouseIcon from '../../../../assets/house.png';
import BackGround from '../../../../assets/background2.jpg';
import Left from '../../../../assets/left-removebg-preview.png';
import Right from '../../../../assets/right-removebg-preview.png';
import {ScaledSheet} from 'react-native-size-matters';

const GhiChiSo = ({navigation}) => {
  const {height} = useWindowDimensions();
  const callDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.containerArrow}>
            <TouchableOpacity style={styles.squareArrow}>
              <Image source={Left} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.squareArrow}>
              <Image source={Right} style={styles.arrow} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerSquare}>
            <TouchableOpacity onPress={callDetails} style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Nguyễn Văn An
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Trần Thị Thái Ngọc Anh
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Phạm Anh Thắng
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerSquare}>
            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Vũ Chí Công
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Hoàng Thị Bảo Dương
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Hồ Huy Hoàng
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerSquare}>
            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Phạm Anh Tài
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Lê Văn Nam
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Dương Thị Kiều
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerSquare}>
            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Phạm Anh Tài
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Lê Văn Nam
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squareHouse}>
              <Text numberOfLines={2} style={styles.text}>
                Dương Thị Kiều
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.containerButton}>
              <Text style={styles.textDongBo}>Đồng bộ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    flex: 1,
    //marginTop: 80,
    //alignItems: "center",
  },
  containerSquare: {
    margin: '5@s',
    height: '70@s',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  containerArrow: {
    margin: '4@s',
    height: '40@s',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    //backgroundColor: "red",
  },
  squareArrow: {
    //backgroundColor: "#7cb48f",
    width: '50@s',
    height: '40@s',
    marginTop: '7@s',
    alignItems: 'center',
  },
  arrow: {
    width: '20@s',
    height: '20@s',
    marginTop: '9@s',
  },
  squareHouse: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '60@s',
    height: '60@s',
    margin: '4@s',
    borderRadius: '10@s',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: '3@s',
  },
  text: {
    fontSize: '12@s',
    marginTop: '15@s',
  },
  containerButton: {
    width: '50%',
    padding: '15@s',
    marginVertical: '15@s',
    alignItems: 'center',
    borderRadius: '5@s',
    backgroundColor: '#7EC0EE',
    shadowColor: '#171717',
    shadowOffset: {width: '-2@s', height: '4@s'},
    shadowOpacity: 0.2,
    shadowRadius: '3@s',
  },
  textDongBo: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default GhiChiSo;
