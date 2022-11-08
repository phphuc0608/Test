import {ScaledSheet} from 'react-native-size-matters';
export default ScaledSheet.create({
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: '10@s',
  },
  container2: {
    //backgroundColor: "#7CA1B4",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '50@s',
  },
  square: {
    width: '100@s',
    height: '100@s',
    margin: '4@s',
    borderRadius: '10@s',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: '13@s',
    fontWeight: 'bold',
    margin: '8@s',
    color: 'white',
  },
  number: {
    fontSize: '17@s',
    fontWeight: 'bold',
    margin: '8@s',
    color: 'white',
  },
  squareLabel: {
    padding: '20@s',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: '28@s',
    fontWeight: 'bold',
    color: 'white',
  },
  squareButton: {
    padding: '8@s',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    width: '150@s',
    height: '200@s',
    borderRadius: '10@s',
  },
  textButton: {
    flex: 1,
    fontSize: '20@s',
    fontWeight: 'bold',
    margin: '7@s',
    color: 'white',
  },
  iconXacNhanThanhToan: {
    // backgroundColor: "#7CA1B4",
    width: '40@s',
    height: '40@s',
    // margin: 7,
  },
  squareIcon: {
    width: '40@s',
    height: '40@s',
    margin: '7@s',
    //backgroundColor: "#7CA1B4",
    justifyContent: 'center',
  },
  iconGhiSoNuoc: {
    width: '20@s',
    height: '20@s',
  },
  iconuser: {
    width: '50@s',
    height: '50@s',
  },
  squareIconUser: {
    width: '60@s',
    height: '60@s',
    margin: '7@s',
    justifyContent: 'center',
  },
});
