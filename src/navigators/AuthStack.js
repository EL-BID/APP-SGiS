import { StackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import SelectCluesScreen from '../screens/SelectCluesScreen';

const AuthStack = StackNavigator({    
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
      headerLeft: null
    })
  },
}, { 
  initialRouteName: 'SignIn'
});

export default AuthStack;
