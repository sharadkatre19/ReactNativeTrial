import React, {useCallback, useContext, useEffect, useState} from 'react';

import {Theme, IUseData} from '../constants/types';

import {dark, light} from '../constants';
import {Alert} from 'react-native';

export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState<Theme>(light);

  // get isDark mode from storage
  const getIsDark = useCallback(async () => {
    // get preferance gtom storage
    // const isDarkJSON = await Storage.getItem('isDark');

    // if (isDarkJSON !== null) {
    //   // set isDark / compare if has updated
    setIsDark(true);
  }, [setIsDark]);

  // handle isDark mode
  const handleIsDark = useCallback(
    (payload: boolean) => {
      // set isDark / compare if has updated
      setIsDark(payload);
      setTheme(payload ? dark : light);
      // save preferance to storage
    },
    [setIsDark],
  );

  // get initial data for: isDark & language
  useEffect(() => {
    getIsDark();
  }, [getIsDark]);

  // change theme based on isDark updates
  useEffect(() => {
    setTheme(isDark ? dark : light);
  }, [isDark]);

  const contextValue = {
    isDark,
    handleIsDark,
    theme,
    setTheme,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;
