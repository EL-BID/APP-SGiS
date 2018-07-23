import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import { Container, Content, Header, Left, Icon } from 'native-base';

import DashboardScreen from '../screens/App/DashboardScreen';
import CluesScreen from '../screens/App/Clues/CluesScreen';
import CluesDetalleScreen from '../screens/App/Clues/CluesDetalleScreen';
import IncidenciasScreen from '../screens/App/Incidencias/IncidenciasScreen';
import IncidenciaDetalleScreen from '../screens/App/Incidencias/IncidenciaDetalleScreen';
import IncidenciaCameraScreen from '../screens/App/Incidencias/IncidenciaCameraScreen';
import EstadoFuerzaScreen from '../screens/App/EstadoFuerzaScreen';
import CensoMujeresScreen from '../screens/App/Censo/CensoMujeresScreen';
import CensoMujeresDetalleScreen from '../screens/App/Censo/CensoMujeresDetalleScreen';
import CensoMujeresNuevoScreen from '../screens/App/Censo/CensoMujeresNuevoScreen';

//Sirve para crear un apilador de pantallas para Dashboard
const StackDashboard = createStackNavigator({
	Dashboard: {
		screen: DashboardScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Dashboard',
      drawerLockMode: 'locked-closed'
    })
	},
});

//Sirve para crear un apilador de pantallas para Clues
const StackClues = createStackNavigator({
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

//Sirve para crear un apilador de pantallas para Incidencias
const StackIncidencias = createStackNavigator({
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

//Sirve para crear un apilador de pantallas para Estado e Fuerza
const StackEstadoFuerza = createStackNavigator({
	EstadoFuerza: {
		screen: EstadoFuerzaScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Estado de Fuerza',
      drawerLockMode: 'locked-closed',
    })
	}
});

//Sirve para crear un apilador de pantallas para Censo de mujeres
const StackCensoMujeres = createStackNavigator({
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

//Sirve para crear menu de cajon personalizado para la app
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
        <DrawerItems 
          {...props} 
        />
      </Content>
    </Container>
  );
};

//Sirve para definir las Pantallas que estaran dentro del menu de Cajon
export default AppDrawer = createDrawerNavigator({
  Dashboard: StackDashboard,
  Clues: StackClues,
  Incidencias: StackIncidencias,
  EstadoFuerza: StackEstadoFuerza,
  CensoMujeres: StackCensoMujeres
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});
