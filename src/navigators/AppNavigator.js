import { SwitchNavigator } from 'react-navigation';

import AuthStack from './AuthStack';
import AppDrawer from './AppDrawer';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppNavigator = SwitchNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  App: AppDrawer,
  Auth: AuthStack,
}, { 
  initialRouteName: 'AuthLoading'
});

export default AppNavigator;
