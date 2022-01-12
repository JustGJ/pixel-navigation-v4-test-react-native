import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Photo from '../screens/Photo';
import Colors from '../styles/Colors';

// Nos différents routes/écrans à afficher
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Accueil',
            //     headerStyle: { backgroundColor: Colors.lightBrown },
        },
    },
    Portfolio: {
        screen: Portfolio,
        // navigationOptions: {
        // title: 'Profil',
        //     headerStyle: { backgroundColor: Colors.lightBrown },
        // },
    },
    Photo: {
        screen: Photo,
        // navigationOptions: {
        //     title: 'Profil',
        //     headerStyle: { backgroundColor: Colors.lightBrown },
        // },
    },
};

// Modifie le header des routes
const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.lightBrown,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    },
};

const stackNav = createStackNavigator(screens, defaultNavigationOptions);

export default createAppContainer(stackNav);
