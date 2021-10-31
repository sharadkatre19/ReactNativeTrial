import React, {useEffect} from 'react';
import {Platform, StatusBar, Switch, Text, TouchableOpacity, View} from 'react-native';
import {useData, ThemeProvider, useTheme} from '../hooks';
import Home from '../screens/Home';

export default () => {
    const {isDark, theme, setTheme, handleIsDark} = useData();

  /* set the status bar based on isDark constant */
  useEffect(() => {
    Platform.OS === 'android' && StatusBar.setTranslucent(true);
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
    return () => {
      StatusBar.setBarStyle('default');
    };
  }, [isDark]);

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <Home/>
    </ThemeProvider>
  );
};
