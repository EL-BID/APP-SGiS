import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DashboardScreen from '../screens/DashboardScreen';
import IncidenciasScreen from '../screens/IncidenciasScreen';
import EstadoFuerzaScreen from '../screens/EstadoFuerzaScreen';

const StackDashboard = StackNavigator({
	Dashboard: {
		screen: DashboardScreen,
    navigationOptions: () => ({
      title: 'Dashboard',
      //drawerLockMode: 'locked-closed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
	},
});

const StackIncidencias = StackNavigator({
	Incidencias: {
		screen: IncidenciasScreen,
    navigationOptions: () => ({
      title: 'Incidencias',
      //drawerLockMode: 'locked-closed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
	}
});

const StackEstadoFuerza = StackNavigator({
	EstadoFuerza: {
		screen: EstadoFuerzaScreen,
    navigationOptions: () => ({
      title: 'Estado de Fuerza',
      //drawerLockMode: 'locked-closed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
	}
});

export default AppDrawer = DrawerNavigator({
  Screen1: {
    screen: StackDashboard
  },
  Screen2: {
    screen: StackIncidencias
  },
  Screen3: {
    screen: StackEstadoFuerza
  }
}, {
  drawerPosition: 'left',
  headerMode: 'float'
});
