import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import Colors from '../styles/Colors';
import TouchableImg from '../components/TouchableImg';

const Portfolio = ({ navigation }) => {
    const favColor = navigation.getParam('favColor');
    const name = navigation.getParam('name');
    const profileImg = navigation.getParam('img');
    const description = navigation.getParam('desc');
    const photoArray = navigation.getParam('photos');

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
