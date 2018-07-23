import { createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthStack from './AuthStack';
import AppDrawer from './AppDrawer';

/* Sirve para definir la navegacion de la aplicacion
 * en esta caso definiendo la ruta inicial
 */
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default AppNavigator;
