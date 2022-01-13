import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import FaqStackNav from './FaqStackNav';
import StackNav from './HomeStackNav';
import Colors from '../styles/Colors';

const RouteConfig = {
    Home: {
        screen: StackNav,
        navigationOptions: {
            drawerLabel: 'Accueil', // Nom de l'onglet
        },
    },
    Faq: {
        screen: FaqStackNav,
        navigationOptions: {
            drawerLabel: 'FAQ',
        },
    },
};

// Configuration du drawer lorsqu'il est activé
const DrawerNavigatorConfig = {
    hideStatusBar: true, // Cache le header (heure etc) lorsque l'on active le drawer
    drawerType: 'slide', // L'écran se déplace en slide vers la droite pour laisser place au drawer
    drawerWidth: 110, // taille drawer
    contentOptions: {
        labelStyle: {
            fontSize: 19,
        },
        inactiveTintColor: Colors.white,
        activeTintColor: Colors.clicked,
    },
    drawerBackgroundColor: '#333', // color drawer
};

// Création des onglets de notre menu
const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);

// C'est ce MainNavigator qui englobera notre App.
export default createAppContainer(MainNavigator);
