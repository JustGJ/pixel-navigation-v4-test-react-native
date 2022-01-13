import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../styles/Colors';

const TouchableImg = ({ onSelectPhoto, imgUrl, imgTitle }) => {
    return (
        <View style={styles.photoContainer}>
            <TouchableOpacity onPress={onSelectPhoto}>
                <ImageBackground style={styles.bgPhoto} source={{ uri: imgUrl }}>
                    <View>
                        <View style={styles.photoTitle}>
                            <Text style={styles.photoTitleText}>{imgTitle}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableImg;

const styles = StyleSheet.create({
    photoContainer: {
        width: '100%',
        height: 350,
        marginBottom: 19,
    },
    bgPhoto: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    photoTitle: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 15,
    },
    photoTitleText: {
        fontFamily: 'InriaSans_400Regular',
        fontSize: 19,
        color: Colors.white,
    },
});
