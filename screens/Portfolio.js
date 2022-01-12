import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialIconsHeader from '../components/MaterialIconsHeader';

const Portfolio = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{navigation.getParam('name')}</Text>
            <Text style={globalStyles.text}>{navigation.getParam('country')}</Text>
            <Text style={globalStyles.text}>{navigation.getParam('totalImg')}</Text>
        </View>
    );
};

Portfolio.navigationOptions = (navigationData) => {
    const name = navigationData.navigation.getParam('name');
    const favColor = navigationData.navigation.getParam('favColor');

    return {
        headerTitle: `Profil de ${name}`,
        headerStyle: {
            backgroundColor: favColor,
        },
        headerTintColor: Colors.white,
        // Button à droite du header
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item
                    title="info"
                    iconName="info-outline"
                    onPress={() => alert('Portfolio de ' + name)}
                />
                <Item
                    title="infoTwo"
                    iconName="info"
                    onPress={() => alert('Portfolio de ' + name)}
                />
            </HeaderButtons>
        ),
    };
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

export default Portfolio;
