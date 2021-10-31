import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { useAuth } from '../hooks/useAuth';

export function Login ({ navigation }) {
  const {handleAuthentication} = useAuth();
//   const { setItem } = useAsyncStorage('@token');
  const logInUser = async () => {
    handleAuthentication(true);
    // await setItem('DUMMY TOKEN');
  };
  return (
    <View style={styles.container}>
      <Text>Registration screen</Text>
      <Button onPress={logInUser} title="Login User" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});