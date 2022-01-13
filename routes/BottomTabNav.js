import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';
import StackNav from './HomeStackNav';
import Colors from '../styles/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import SelectedStackNav from './SelectedStackNav';

const RouteConfigs = {
    Home: {
        screen: StackNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
                <MaterialIcons name="home" size={24} color={tabInfo.tintColor} />
            ),
            tabBarLabel: 'Accueil',
            tabBarColor: Colors.lightBrown,
        },
    },
    Likes: {
        screen: SelectedStackNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="thumb-up" size={24} color={tintColor} />
            ),
            tabBarLabel: 'Sélection',
            tabBarColor: Colors.darkGrey,
        },
    },
};

// IOS
const TabNavigatorConfig = {
    tabBarOptions: {
        inactiveTintColor: Colors.darkGrey,
        activeTintColor: Colors.clicked,
    },
};

// ANDROID
const MaterialBottomTabNavigatorConfig = {
    inactiveColor: Colors.white,
    shifting: true,
};

const BottomTabNav =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(RouteConfigs, MaterialBottomTabNavigatorConfig)
        : createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default BottomTabNav;
