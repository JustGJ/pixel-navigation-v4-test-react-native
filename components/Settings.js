import React, { useState, useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';
import CustomSwitch from './CustomSwitch';
import { setCategorySettings } from '../redux/actions/settings.action';
import { useDispatch } from 'react-redux';

const Settings = ({ closeModal }) => {
    const dispatch = useDispatch();

    const [isAnimals, setIsAnimals] = useState(true);
    const [isTravel, setIsTraval] = useState(true);
    const [isCars, setIsCars] = useState(true);

    const saveSettings = useCallback(() => {
        const savedSettings = {
            animals: isAnimals,
            travel: isTravel,
            cars: isCars,
        };

        //dispatch
        dispatch(setCategorySettings(savedSettings));
        closeModal();
    }, [isAnimals, isTravel, isCars]);

    return (
        <View style={globalStyles.container}>
            <Text style={styles.settingsTitle}>Réglage</Text>
            <Text style={styles.settingsText}>
                Utilisez les paramètres ci-dessous pour gérer les catégories à afficher
            </Text>
            <View style={styles.separator}></View>
            <CustomSwitch
                label="Animaux"
                state={isAnimals}
                handleSwitch={(newVal) => setIsAnimals(newVal)}
            />
            <CustomSwitch
                label="Voyages"
                state={isTravel}
                handleSwitch={(newVal) => setIsTraval(newVal)}
            />
            <CustomSwitch
                label="Voitures"
                state={isCars}
                handleSwitch={(newVal) => setIsCars(newVal)}
            />
            {!isAnimals && !isTravel && !isCars ? (
                <Text
                    style={{ ...styles.settingsText, color: Colors.clicked, textAlign: 'center' }}>
                    Veuilez choisir une catégorie
                </Text>
            ) : (
                <Button title="Valider les paramètres" onPress={saveSettings} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    settingsTitle: {
        fontSize: 20,
        padding: 9,
        fontFamily: 'InriaSans_700Bold',
        textAlign: 'center',
        margin: 16,
        textTransform: 'uppercase',
    },
    settingsText: {
        fontFamily: 'InriaSans_300Light',
        fontSize: 19,
        padding: 9,
    },
    separator: {
        borderWidth: 0.5,
        color: Colors.lightGrey,
        marginVertical: 25,
    },
});

export default Settings;
