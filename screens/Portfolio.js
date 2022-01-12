import React from 'react';
import { Text, View } from 'react-native';
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
Portfolio.navigationOptions = {
    headerTitle: 'Accueil',
    headerStyle: {
        backgroundColor: 'red',
    },
    headerTintColor: 'yellow',
    headerTitleStyle: {
        fontStyle: 'italic',
    },
};

export default Portfolio;
