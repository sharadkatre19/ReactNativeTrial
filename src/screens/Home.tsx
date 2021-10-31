import React, {} from 'react';
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {useData, useTheme} from '../hooks';
import { useAuth } from '../hooks/useAuth';

export default () => {
  const {isDark, handleIsDark} = useData();

  const {colors} = useTheme();

  const { setIsLoggedIn } = useAuth();
  const logout = async () => {
    // await AsyncStorage.removeItem('@token');
    setIsLoggedIn(false);
  };

  return (
        <View style={styles.container}>
        <Text style={{color: colors.text}}>Welcome</Text>
        <Switch
          value={isDark}
          onValueChange={checked => {
            handleIsDark(checked);
          }}
        />
      <Text>Home Screen</Text>
      <Text>User is logged in!</Text>
      <Button onPress={logout} title="LOGOUT" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});