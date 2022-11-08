import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import MainNavigator from './src/navigation/AppNavi';
import GlobalProvider from './src/context/Provider';

const App = () => {
  const {height, width} = useWindowDimensions();
  return (
    <GlobalProvider>
      <MainNavigator />
    </GlobalProvider>
  );
};

export default App;
