import React from 'react';
import { Text } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { Container, Content, Header, Left, Icon } from 'native-base';

import DashboardScreen from '../screens/DashboardScreen';
import CluesScreen from '../screens/Clues/CluesScreen';
import CluesDetalleScreen from '../screens/Clues/CluesDetalleScreen';
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
      header: null,
      title: 'Dashboard',
      drawerLockMode: 'locked-closed'
    })
	},
});

const StackClues = StackNavigator({
	Clues: {
		screen: CluesScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Clues',
      drawerLockMode: 'locked-closed'
    })
	},
  CluesDetalle: {
		screen: CluesDetalleScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Clues Detalle',
      drawerLockMode: 'locked-closed',
    })
	},
});

const StackIncidencias = StackNavigator({
	Incidencias: {
		screen: IncidenciasScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Incidencias',
      drawerLockMode: 'locked-closed'
    })
  },
  IncidenciaDetalle: {
		screen: IncidenciaDetalleScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Incidencia Detalle',
      drawerLockMode: 'locked-closed',
    })
	},
  IncidenciaCamera: {
		screen: IncidenciaCameraScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Tomar foto',
      drawerLockMode: 'locked-closed',
    })
	}
});

const StackEstadoFuerza = StackNavigator({
	EstadoFuerza: {
		screen: EstadoFuerzaScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Estado de Fuerza',
      drawerLockMode: 'locked-closed',
    })
	}
});

const StackCensoMujeres = StackNavigator({
	CensoMujeres: {
		screen: CensoMujeresScreen,
    navigationOptions: () => ({      
      header: null,
      title: 'Censo de Mujeres',
      drawerLockMode: 'locked-closed',
    })
  },
  CensoMujeresDetalle: {
		screen: CensoMujeresDetalleScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Censo Detalle',
      drawerLockMode: 'locked-closed',
    })
	},
  CensoMujeresNuevo: {
		screen: CensoMujeresNuevoScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Registrar Persona',
      drawerLockMode: 'locked-closed',
    })
	}
});

const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={{ backgroundColor: '#3F51B5' }}>
        <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='person' style={{ color: 'white' }} />
          <Text style={{ marginLeft: 5, fontSize: 22, color: 'white' }}>Bienvenido</Text>
        </Left>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
    </Container>
  );
}

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
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});
