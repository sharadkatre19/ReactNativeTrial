import React, {} from 'react';
import {
  Switch,
  Text,
  View,
} from 'react-native';
import {useData, useTheme} from '../hooks';

export default () => {
  const {isDark, handleIsDark} = useData();

  const {colors} = useTheme();

  return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.primary,
        }}>
        <Text style={{color: colors.text}}>Welcome</Text>
        <Switch
          value={isDark}
          onValueChange={checked => {
            handleIsDark(checked);
          }}
        />
      </View>
  );
};
