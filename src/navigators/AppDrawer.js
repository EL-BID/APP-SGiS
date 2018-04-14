import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DashboardScreen from '../screens/DashboardScreen';
import CluesScreen from '../screens/CluesScreen';
import IncidenciasScreen from '../screens/Incidencias/IncidenciasScreen';
import IncidenciaDetalleScreen from '../screens/Incidencias/IncidenciaDetalleScreen';
import IncidenciaCameraScreen from '../screens/Incidencias/IncidenciaCameraScreen';
import EstadoFuerzaScreen from '../screens/EstadoFuerzaScreen';
import CensoMujeresScreen from '../screens/Censo/CensoMujeresScreen';
import CensoMujeresDetalleScreen from '../screens/Censo/CensoMujeresDetalleScreen';
import CensoMujeresNuevoScreen from '../screens/Censo/CensoMujeresNuevoScreen';

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

const StackClues = StackNavigator({
	Clues: {
		screen: CluesScreen,
    navigationOptions: () => ({
      title: 'Clues',
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
      drawerLockMode: 'locked-closed',
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
      drawerLockMode: 'locked-closed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
	},
  IncidenciaCamera: {
		screen: IncidenciaCameraScreen,
    navigationOptions: () => ({
      title: 'Tomar foto',
      drawerLockMode: 'locked-closed',
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
      drawerLockMode: 'locked-closed',
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
      drawerLockMode: 'locked-closed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
  },
  CensoMujeresDetalle: {
		screen: CensoMujeresDetalleScreen,
    navigationOptions: () => ({
      title: 'Censo Detalle',
      drawerLockMode: 'locked-closed',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3F51B5'
      }
    })
	},
  CensoMujeresNuevo: {
		screen: CensoMujeresNuevoScreen,
    navigationOptions: () => ({
      title: 'Registrar Persona',
      drawerLockMode: 'locked-closed',
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
  ScreenClues: {
    screen: StackClues
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
