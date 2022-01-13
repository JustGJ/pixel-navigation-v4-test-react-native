import { createStackNavigator } from 'react-navigation-stack';
import Faq from '../screens/Faq';
import Colors from '../styles/Colors';

// Nos différents routes/écrans à afficher
const screens = {
    Faq: {
        screen: Faq,
        navigationOptions: {
            title: 'Faq',
        },
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

const FaqStackNav = createStackNavigator(screens, defaultNavigationOptions);

export default FaqStackNav;
