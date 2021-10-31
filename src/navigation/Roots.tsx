import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import { Splash } from '../screens/Splash';
import { Login } from '../screens/Login';
import { AuthContext, useAuth } from '../hooks/useAuth';

const Stack = createNativeStackNavigator();
function Root() {
  const {isLoggedIn, setIsLoggedIn} = useAuth();
//   const { getItem } = useAsyncStorage('@token');
  const [checking, setIsChecking] = React.useState(true);

  React.useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      const item = "";//await getItem();

      // user is logged in
      if (item !== null) {
        setIsLoggedIn(true);
      }

      setIsChecking(false);
    };

    checkIfUserIsLoggedIn();
  }, []);

  if (checking) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="Landing" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Root;
