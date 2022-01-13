import React from 'react';
import { FlatList, View } from 'react-native';
import PressableItems from '../components/PressableItems';
import { globalStyles } from '../styles/AppStyles';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data/usersData';

const Home = ({ navigation }) => {
    // const { item } = data
    const renderProfiles = ({ item }) => {
        // Pour chaque item parcouru, on return un <Pressable> dans la route Portfolio
        // On passe en props handleNavigate afin d'nevoyer la navigation au composant enfant
        return (
            <PressableItems
                item={item}
                handleNavigate={() => navigation.navigate('Portfolio', item)}
            />
        );
    };

    return (
        <View style={globalStyles.container}>
            <FlatList data={DATA} keyExtractor={(item) => item.id} renderItem={renderProfiles} />
        </View>
    );
};

// Accès au header Home afin d'accéder aux méthodes de navigations.
Home.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item title="Menu" iconName="menu" onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
    };
};

export default Home;
