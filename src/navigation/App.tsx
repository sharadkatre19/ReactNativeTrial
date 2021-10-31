import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {useData, ThemeProvider, AuthProvider} from '../hooks';
import Root from './Roots';

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
      <AuthProvider>
        <Root/>
      </AuthProvider>
    </ThemeProvider>
  );
};
