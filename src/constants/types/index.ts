import {Theme} from './theme';

export * from './theme';
export * from './auth';

export interface IUseData {
  isDark: boolean;
  handleIsDark: (isDark?: boolean) => void;
  theme: Theme;
  setTheme: (theme?: Theme) => void;
}

export interface AuthData {
  isLoggedIn: boolean;
  handleAuthentication: (isLoggedIn?: boolean) => void;
  setIsLoggedIn: (isLoggedIn?: boolean) => void;
}
