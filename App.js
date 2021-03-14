import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import AudioProvider from './app/MusicContext/AudioProvider';
import AppNavigator from './app/navigation/appNavigator';



export default function App()
{
  return (
    <AudioProvider>
   <NavigationContainer>
     <AppNavigator/>
  </NavigationContainer>
  </AudioProvider>
  );
}
