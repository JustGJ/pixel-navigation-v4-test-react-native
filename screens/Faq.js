import React from 'react';
import { Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialIconsHeader from '../components/MaterialIconsHeader';

const Faq = () => {
    return (
        <View>
            <Text>FAQ</Text>
        </View>
    );
};

export default Faq;

Faq.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item title="Menu" iconName="menu" onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
    };
};
