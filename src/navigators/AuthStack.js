import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/Auth/SignInScreen';
import SelectCluesScreen from '../screens/Auth/SelectCluesScreen';

const AuthStack = createStackNavigator({   
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  SelectClues: {
    screen: SelectCluesScreen,
    navigationOptions: () => ({
      title: 'Seleccione una clues',
      headerLeft: null,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
  },
}, { 
  initialRouteName: 'SignIn'
});

export default AuthStack;
