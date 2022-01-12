import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Photo = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Photo</Text>
            <Button title="Vers Home" onPress={handlePress} />
        </View>
    );
};

export default Photo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
