import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DashboardScreen from '../screens/DashboardScreen';
import IncidenciasScreen from '../screens/IncidenciasScreen';
import IncidenciaDetalleScreen from '../screens/IncidenciaDetalleScreen';
import EstadoFuerzaScreen from '../screens/EstadoFuerzaScreen';
import CensoMujeresScreen from '../screens/CensoMujeresScreen';

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
  },
  IncidenciaDetalle: {
		screen: IncidenciaDetalleScreen,
    navigationOptions: () => ({
      title: 'Incidencia Detalle',
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

const StackCensoMujeres = StackNavigator({
	CensoMujeres: {
		screen: CensoMujeresScreen,
    navigationOptions: () => ({
      title: 'Censo de Mujeres',
      //drawerLockMode: 'locked-closed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
	}
});

export default AppDrawer = DrawerNavigator({
  ScreenDashboard: {
    screen: StackDashboard
  },
  ScreenIncidencias: {
    screen: StackIncidencias
  },
  ScreenEstadoFuerza: {
    screen: StackEstadoFuerza
  },
  ScreenCensoMujeres: {
    screen: StackCensoMujeres
  }
}, {
  drawerPosition: 'left',
  headerMode: 'float'
});
