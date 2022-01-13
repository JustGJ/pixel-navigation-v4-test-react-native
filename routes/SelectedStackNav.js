import { createStackNavigator } from 'react-navigation-stack';
import Photo from '../screens/Photo';
import Colors from '../styles/Colors';
import Selected from '../screens/Selected';
import { Platform } from 'react-native';

// Nos différents routes/écrans à afficher
const screens = {
    Selected: {
        screen: Selected,
        navigationOptions: {
            title: 'FAVORIS',
        },
    },
    Portfolio: {
        screen: Photo,
        navigationOptions: {
            title: 'PHOTO',
        },
    },
    Photo: {
        screen: Photo,
    },
};

// Modifie le header des routes par défault
const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? Colors.lightBrown : Colors.darkGrey,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    },
};

const SelectedStackNav = createStackNavigator(screens, defaultNavigationOptions);

export default SelectedStackNav;
