import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Modal, View, StyleSheet, Text } from 'react-native';
import PressableItems from '../components/PressableItems';
import { globalStyles } from '../styles/AppStyles';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../styles/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import Settings from '../components/Settings';

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const selectedCategories = useSelector((state) => state.users.selectedCategories);

    // Création param pour y avoir accès au header
    useEffect(() => {
        navigation.setParams({ handleModal: handleSettingsModal });
    }, [handleSettingsModal]);

    // const { item } = data
    const renderProfiles = ({ item }) => {
        // Pour chaque item parcouru, on return un <Pressable> dans la route Portfolio
        // On passe en props handleNavigate afin d'envoyer la navigation au composant enfant
        return (
            <PressableItems
                item={item}
                handleNavigate={() => navigation.navigate('Portfolio', item)}
            />
        );
    };

    const handleSettingsModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalBody}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        color="black"
                        style={styles.modalClose}
                        onPress={handleSettingsModal}
                    />
                    <Settings closeModal={handleSettingsModal} />
                </View>
            </Modal>
            <FlatList
                data={selectedCategories}
                keyExtractor={(item) => item.id}
                renderItem={renderProfiles}
            />
        </View>
    );
};

// Accès au header Home afin d'accéder aux méthodes de navigations.
Home.navigationOptions = ({ navigation }) => {
    const handleModal = navigation.getParam('handleModal');

    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item title="Menu" iconName="menu" onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item title="Réglage" iconName="settings" onPress={handleModal} />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    modalBody: {
        flex: 1,
        backgroundColor: Colors.ghost,
        marginVertical: 60,
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
    },
    modalClose: {
        alignSelf: 'flex-end',
    },
});

export default Home;
