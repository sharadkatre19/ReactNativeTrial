import React, { useEffect } from 'react';

import {DataProvider, ThemeProvider, useData, useTheme} from './src/hooks';
import { Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import AppNavigation from './src/navigation/App';

export default function App() {
  return (
    <DataProvider>
      <AppNavigation/>
    </DataProvider>
  );
}
