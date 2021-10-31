import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export function Splash ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Landing screen</Text>
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Navigate to register screen"
      />
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Navigate to login screen"
      />
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