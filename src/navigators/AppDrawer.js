import { DrawerNavigator } from 'react-navigation';
import DashboardScreen from '../screens/DashboardScreen';
import IncidenciasScreen from '../screens/IncidenciasScreen';

const AppDrawer = DrawerNavigator({
	Dashboard: {
		screen: DashboardScreen,
		navigationOptions: {
			title: 'Dashboard'
		}
	},
	Incidencias: {
		screen: IncidenciasScreen,
		navigationOptions: {
			title: 'Incidencias'
		}
	}
});

export default AppDrawer;
