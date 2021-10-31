import {ImageSourcePropType} from 'react-native';
import {Theme} from './theme';

export * from './theme';

export interface IUseData {
  isDark: boolean;
  handleIsDark: (isDark?: boolean) => void;
  theme: Theme;
  setTheme: (theme?: Theme) => void;
}
