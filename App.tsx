/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TrackPlayer from 'react-native-track-player';
import RootStack from './src/navigation/AppNavigator';

function App() {
  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
  };
  useEffect(() => {
    setupPlayer();
  }, []);
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
