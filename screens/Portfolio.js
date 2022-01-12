import React from 'react';
import { Text, View, Platform } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';

const Portfolio = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{navigation.getParam('name')}</Text>
            <Text style={globalStyles.text}>{navigation.getParam('country')}</Text>
            <Text style={globalStyles.text}>{navigation.getParam('totalImg')}</Text>
        </View>
    );
};

// Personnalise le header pour le composant Portfolio
// Portfolio.navigationOptions = {
//     headerTitle: 'Profile',
//     headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? 'blue' : '#fff', // Sur OS, header couleur blue, et android blanc
//     },
//     headerTintColor: 'yellow',
//     headerTitleStyle: {
//         fontStyle: 'italic',
//     },
// };

// Cette fonction permet d'accéder aux props en dehors de la fonction afin de personnaliser le header de manière dynamique avec les props reçus
Portfolio.navigationOptions = (navigationData) => {
    const name = navigationData.navigation.getParam('name');
    const favColor = navigationData.navigation.getParam('favColor');

    return {
        headerTitle: `Profil de ${name}`,
        headerStyle: {
            backgroundColor: favColor,
        },
        headerTintColor: Colors.white,
    };
};

export default Portfolio;
