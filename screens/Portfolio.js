import React, { useCallback, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { setSelection } from '../redux/actions/selection.action';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import Colors from '../styles/Colors';
import TouchableImg from '../components/TouchableImg';

const Portfolio = ({ navigation }) => {
    const userId = navigation.getParam('id');
    const favColor = navigation.getParam('favColor');
    const name = navigation.getParam('name');
    const profileImg = navigation.getParam('img');
    const description = navigation.getParam('desc');
    const photoArray = navigation.getParam('photos');

    // Vérifie si l'user a été selectionné
    const selectedUser = useSelector((state) =>
        state.users.selectedUsers.some((user) => user.id === userId)
    );
    const dispatch = useDispatch();

    // add to selection
    const handleDispatch = useCallback(() => {
        dispatch(setSelection(userId));
        if (selectedUser) {
            Alert.alert('Photos effacées', `Les photos de ${name} sont effacées`, [{ text: 'Ok' }]);
        } else {
            Alert.alert('Photos enregistrées', 'Elles sont disponibles dans votre sélection', [
                { text: 'Ok' },
            ]);
        }
    }, [dispatch, userId, selectedUser]);

    // Pour qu'on le header puisse avoir accès à notre fonction handleDispatch, il faut créer un nouveau param afin de le récupérer avec un get.
    useEffect(() => {
        navigation.setParams({ handleLike: handleDispatch });
    }, [handleDispatch]);

    // Pour qu'on le header puisse avoir accès à isSeelcted, il faut créer un nouveau param afin de le récupérer avec un get.
    useEffect(() => {
        navigation.setParams({ isSelected: selectedUser });
    }, [selectedUser]);

    // Go to the photo
    const selectPhoto = (photo) => {
        navigation.navigate('Photo', photo);
    };

    return (
        <ScrollView style={globalStyles.container}>
            <View style={{ backgroundColor: favColor, ...styles.profileInfos }}>
                <Image style={styles.smallProfileImg} source={{ uri: profileImg }} />
                <Text style={styles.profileName}>{name}</Text>
            </View>
            <View style={styles.profileDescription}>
                <Text style={styles.titleBiotext}>Bio :</Text>
                <Text style={styles.textBio}>{description}</Text>
            </View>
            <View>
                {photoArray.map((photo) => (
                    <TouchableImg
                        key={photo.id}
                        imgUrl={photo.url}
                        imgTitle={photo.title}
                        onSelectPhoto={() => selectPhoto(photo)}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

// Cette fonction permet d'accéder aux props en dehors de la fonction afin de personnaliser le header de manière dynamique avec les props reçus
Portfolio.navigationOptions = (navigationData) => {
    const name = navigationData.navigation.getParam('name');
    const favColor = navigationData.navigation.getParam('favColor');
    const handleLike = navigationData.navigation.getParam('handleLike'); // Notre param qui possède la fonction d'ajout, crée au montage du composant
    const isSelected = navigationData.navigation.getParam('isSelected');

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
                    title="Ajouter"
                    iconName={isSelected ? 'delete' : 'thumb-up'}
                    onPress={handleLike}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    profileInfos: {
        alignItems: 'center',
        padding: 10,
    },
    smallProfileImg: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        margin: 9,
        borderWidth: 6,
        borderColor: Colors.white,
    },
    profileName: {
        fontFamily: 'InriaSans_700Bold',
        color: Colors.white,
        fontSize: 25,
    },
    profileDescription: {
        backgroundColor: Colors.ghost,
        padding: 15,
        fontSize: 25,
        fontFamily: 'InriaSans_400Regular',
    },
    titleBiotext: {
        fontSize: 25,
        padding: 9,
        fontFamily: 'InriaSans_700Bold',
    },
    textBio: {
        fontFamily: 'InriaSans_400Regular',
        fontSize: 20,
        padding: 9,
    },
});

export default Portfolio;
