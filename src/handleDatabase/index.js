import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
export const getDBConnection = async () => {
  return openDatabase({
    name: 'MainDB.db',
    location: 'default',
    createFromLocation: '~www/MainDB.db',
  });
};
// //  dung file nay de khai bao nhung query ban muon dung toi ne :
// // VD :
const tableName = 'KhachHang';
enablePromise(true);
export const getListKhachHang = async (db: SQLiteDatabase) => {
  await db.executeSql(
    `SELECT * FROM ${tableName}`,
    [],
    (tx, res) => {
      console.log('get data successfully');
    },
    error => {
      console.log('Fail or err');
    },
  );
};
