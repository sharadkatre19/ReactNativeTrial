import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthData, AuthProviderType } from '../constants/types';

export const AuthContext = React.createContext({});

export const AuthProvider = ({
  children,
}: AuthProviderType) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getIsLoggedIn = useCallback(async () => {
    // get preferance gtom storage
    // const isLoggedInJSON = await Storage.getItem('isDark');
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  // handle Auth mode
  const handleAuthentication = useCallback(
    (payload: boolean) => {
      // set isLoggedIn / compare if has updated
      setIsLoggedIn(payload);
      // save preferance to storage
    },
    [setIsLoggedIn],
  );

  // get initial data for: isDark & language
  useEffect(() => {
    getIsLoggedIn();
  }, [getIsLoggedIn]);

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    handleAuthentication,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthData;

