import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Colors from '../styles/Colors';

const NoData = ({ children }) => {
    return (
        <ImageBackground
            source={{
                uri: 'https://cdn.pixabay.com/photo/2021/12/30/18/07/grey-heron-6904390_960_720.jpg',
            }}
            style={styles.emptyMsgWrapper}>
            <Text style={styles.emptyMsgText}>{children}</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    emptyMsgWrapper: {
        flex: 1,
        backgroundColor: Colors.lightBrown,
    },
    emptyMsgText: {
        textAlign: 'center',
        marginTop: 50,
        color: Colors.white,
        fontSize: 23,
    },
});

export default NoData;
